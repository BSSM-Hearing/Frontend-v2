import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button className={className + " inline p-[20px] m-8 origin-bottom duration-150 ease-in rounded-3xl hover:pt-[36px]"} onClick={onClick}>
      {children}
    </button>
  );
}
