export default function Message() {
  const bubbleNonOwner = "rounded-r-lg rounded-bl-lg";
  const bubbleOwner = "rounded-l-lg rounded-br-lg";
  const bubbleClass = bubbleOwner;
  const directionOwner = "flex-row-reverse";
  const directionNonOwner = "";
  const direction = directionOwner;

  return (
    <div className={`flex gap-2 px-2 py-2 ${direction}`}>
      <div className="info">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span className="text-xs text-slate-400">Just now</span>
      </div>
      <div>
        <div
          className={`bg-blue-500 ml-auto text-white px-5 py-2 h-min w-fit ${bubbleClass}`}
        >
          <p className="text-left">Hello</p>
        </div>

        <img
          className="mt-2 rounded-lg w-40 h-40 object-cover"
          src="https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}
