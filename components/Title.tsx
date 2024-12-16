import React from "react";

const Title = ({ text, center }: { text: string; center?: boolean }) => {
  return (
    <div
      data-aos="fade-down"
      className={`text-[40px] uppercase text-white max-md:text-2xl ${center && "text-center"}`}
    >
      {text}
    </div>
  );
};

export default Title;
