import add_image from "../img/add_image.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(err);
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: displayName,
              email: email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/");
          });
        }
      );
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div className="bg-white px-5 py-16 rounded-md flex flex-col gap-2 items-center">
        <span className="text-[#5d5b8d] font-bold text-2xl">FireChat</span>
        <span className="text-[#5d5b8d] text-xl">Register</span>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="px-4 border-0 w-64 border-b-2"
            type="text"
            placeholder="display name"
          />
          <input
            className="px-4 border-0 w-64 border-b-2"
            type="email"
            placeholder="email"
          />
          <input
            className="px-4 border-0 w-64 border-b-2"
            type="password"
            placeholder="password"
          />
          <input
            className="px-4 border-0 w-64 border-b-2 hidden"
            type="file"
            id="file"
          />
          <label
            htmlFor="file"
            className="flex items-center cursor-pointer mx-auto"
          >
            <img src={add_image} alt="add profile image" className="w-10" />
            <span>Add an avatar</span>
          </label>
          <button className="bg-[#7b79ec] text-white p-1 font-bold border-0 cursor-pointer rounded-md">
            Signup
          </button>
        </form>
        <p className="text-[#5d5b96] text-xl mt-3">
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;
