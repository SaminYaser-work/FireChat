import React from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Messages from "./Messages";
import Input from "./Input";

export default function Chat() {
  return (
    <div className="grow-[2]">
      <div className="flex justify-between py-7 px-4 text-white bg-slate-800">
        <span>Tom</span>
        <div className="flex gap-2 items-center">
          <AiOutlineVideoCameraAdd className="text-2xl cursor-pointer" />
          <MdOutlinePersonAddAlt1 className="text-2xl cursor-pointer" />
          <HiOutlineDotsHorizontal className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col h-[calc(100%-80px)]">
        <Messages className="h-full" />
        <Input className="mt-auto" />
      </div>
    </div>
  );
}
