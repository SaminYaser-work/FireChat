import React from "react";
import { GrAttachment } from "react-icons/gr";
import { FiImage } from "react-icons/fi";

export default function Input({ className }) {
  return (
    <div className={`bg-white flex justify-between px-2 gap-2 ${className}`}>
      <textarea
        className="outline-none border-0 h-full w-full text-xl py-5 resize-none"
        type="text"
        placeholder="Type something..."
      />

      <div className="flex justify-center items-center gap-2">
        <GrAttachment className="text-2xl cursor-pointer" />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <FiImage className="text-2xl cursor-pointer" />
        </label>
        <button className="">Send</button>
      </div>
    </div>
  );
}
