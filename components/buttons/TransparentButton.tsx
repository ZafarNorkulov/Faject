import React from "react";

export default function TransparentButton({ text, onClick, img }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex size-full items-center justify-center gap-[25px] rounded-[24px] border border-white bg-transparent font-normal text-white`}
    >
      {text}
      {!img && (
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13.5L7 7.5L1 1.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
