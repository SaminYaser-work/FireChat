import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  return (
    <div className="flex items-center h-[5rem] bg-slate-900 text-white justify-between px-2">
      <span className="font-bold">FireChat</span>
      <div className="flex gap-4 items-center">
        <img
          className="w-9 h-9 rounded-full object-cover"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
          alt=""
        />
        <span>Sam</span>
        <button
          onClick={() => signOut(auth)}
          className="rounded-md border-0 bg-slate-500 text-white px-2 py-1"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
