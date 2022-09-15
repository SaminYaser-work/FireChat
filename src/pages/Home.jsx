import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div className="border-2 border-white rounded-lg w-10/12 h-4/5 flex overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
