import React from "react";

const Tag = ({
  text,
  active,
  onClick,
}: {
  text: string | undefined;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <p
      className={`cursor-pointer rounded-full border px-6 py-2 text-sm uppercase text-white hover:border-primary hover:bg-primary hover:opacity-80 max-md:text-sm ${active ? "border-primary bg-primary" : "border-[#FFFFFF33] bg-transparent"}`}
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default Tag;
