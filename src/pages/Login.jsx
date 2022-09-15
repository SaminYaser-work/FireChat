import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div className="bg-white px-5 py-16 rounded-md flex flex-col gap-2 items-center">
        <span className="text-[#5d5b8d] font-bold text-2xl">FireChat</span>
        <span className="text-[#5d5b8d] text-xl">Login</span>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          <button className="bg-[#7b79ec] text-white p-1 font-bold border-0 cursor-pointer rounded-md">
            Login
          </button>
        </form>
        <p className="text-[#5d5b96] text-xl mt-3">
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
}
