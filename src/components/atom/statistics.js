import React from "react";

export default function Statistics({ count, percent, type = "점수" }) {
  return (
    <div className="bg-[#1C69FF] p-10 rounded-xl text-white font-[900] text-center">
      <h2 className="text-[24px]">오늘의 {type}</h2>
      <h1 className="text-[32px] my-3">
        <span className="text-[#F6CE60]">{count}</span>
        {type !== "점수" ? " 회" : " 점"}
      </h1>
      <h2 className="text-[16px]">어제 대비 {percent}% 증가</h2>
    </div>
  );
}
