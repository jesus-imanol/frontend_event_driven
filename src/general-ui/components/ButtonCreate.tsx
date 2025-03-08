import React from "react";

interface ButtonCreateProps {
  text: string;
  onClick: () => void;
}

const ButtonCreate: React.FC<ButtonCreateProps> = ({ text, onClick }) => {
  return (
    <>
      <button
        className="rounded-lg relative w-[160px] h-10 cursor-pointer flex items-center border border-gray-500 bg-gray-500 group hover:bg-gray-500 active:bg-gray-500 active:border-gray-500"
        onClick={onClick}
      >
        <span
          className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300 p-2.5"
        >
          {text}
        </span>
        <span
          className="absolute right-0 h-full w-10 rounded-lg bg-gray-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
        >
          <svg
            className="svg w-8 text-white"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
    </>
  );
}

export default ButtonCreate;
