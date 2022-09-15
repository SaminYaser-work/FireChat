import React from "react";

export default function Search() {
  return (
    <div className="border-b-2 border-gray text-white">
      <div className="my-1">
        <input
          className="bg-transparent pl-2 text-xl border-0 text-white outline-none placeholder:text-white"
          placeholder="Find a user"
          type="text"
        />
      </div>
      <div className="flex items-center p-5 cursor-pointer hover:bg-slate-400">
        <img
          className="w-10 h-10 rounded-full objject-fit"
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="ml-5">
          <span>Tom</span>
        </div>
      </div>
    </div>
  );
}
