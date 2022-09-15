import Navbar from "./Navbar";
import Search from "./Search";

export default function Sidebar() {
  return (
    <div className="flex-1 bg-slate-700">
      <Navbar />
      <Search />
    </div>
  );
}
