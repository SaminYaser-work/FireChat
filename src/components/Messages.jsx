import Message from "./Message";

export default function Messages({ className }) {
  return (
    <div
      className={`bg-slate-100 overflow-y-scroll overflow-x-hidden ${className}`}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
