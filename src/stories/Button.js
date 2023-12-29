import React from "react";

function Button(props) {
  const { icon, text, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-black items-center flex rounded-full text-center hover:bg-gray-200"
    >
      <div className="flex m-2 mx-4 items-center">
        <span className="text-3xl "> {icon}</span>
        <span className="text-xl ml-2">{text}</span>
      </div>
    </button>
  );
}

export default Button;
