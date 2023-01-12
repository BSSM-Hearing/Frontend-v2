import React from "react";
import Frame from "../../components/common/frame";
import { PieChart } from "react-minimal-pie-chart";
import LineGraph from "./line";

export default function Analytic() {
  const data = [
    { title: "0~3마디", value: 10, color: "#0044ff" },
    { title: "4~6마디", value: 6, color: "#e9e9e9" },
    { title: "7~9마디", value: 3, color: "#f63e3e" },
  ];

  return (
    <Frame rollback>
      <div className="w-full h-full mx-auto p-12">
        <h1 className="text-[40px] fold-[900] text-center">분석 모드</h1>
        <PieChart
          style={{
            display: "block",
            width: "250px",
            height: "250px",
            margin: "50px auto 50px auto",
          }}
          data={data}
          label={({ dataEntry }) => {
            return dataEntry.value;
          }}
          animate
        />

        <h1 className="text-[30px] text-center">오늘의 대화 분석</h1>

        <div className="my-24">
          <LineGraph className="" />
          <h1 className="text-[30px] mt-20 text-center">최근의 점수 분석</h1>
        </div>
      </div>
    </Frame>
  );
}
