import React, { useEffect, useState } from "react";
import Frame from "../../components/common/frame";
import { PieChart } from "react-minimal-pie-chart";
import LineGraph from "./line";
import instance from "../../lib/instance";

export default function Analytic() {
  const [datas, setDatas] = useState([
    { title: "0~3마디", value: 0, color: "#d4e4fe" },
    { title: "4~6마디", value: 0, color: "#9fb1e1" },
    { title: "7~9마디", value: 0, color: "#2a60c8" },
    { title: "10~12마디", value: 0, color: "#3461bc" },
    { title: "13마디 이상", value: 0, color: "#094788" },
  ]);

  

  useEffect(() => {
    instance
      .get(
        // "http://10.150.149.2:3000/api/dialog/827ef69a-73fc-4882-b9da-945162349750",
        "http://10.150.149.2:3000/api/dialog/get/ratio",
      )
      .then(({ data }) => {
        console.log(data);
        const newData = [
          { title: "0~3마디", value: parseInt(data["0to3"]), color: "#d4e4fe" },
          { title: "4~6마디", value: parseInt(data["4to7"]), color: "#9fb1e1" },
          {
            title: "7~9마디",
            value: parseInt(data["7to10"]),
            color: "#2a60c8",
          },
          {
            title: "10~12마디",
            value: parseInt(data["10to13"]),
            color: "#3461bc",
          },
          {
            title: "13마디 이상",
            value: parseInt(data["13to16"]),
            color: "#094788",
          },
        ];
        console.log(newData);
        setDatas(newData);
      });
  }, []);

  return (
    <Frame rollback>
      <div className="w-full h-full mx-auto p-12">
        <h1 className="text-[40px] fold-[900] text-center">분석 모드</h1>
        <h1 className="text-[30px] mt-[60px] text-center">오늘의 대화 분석</h1>

        {datas ? (
          <PieChart
            style={{
              display: "block",
              width: "250px",
              height: "250px",
              margin: "20px auto 10px auto",
            }}
            data={datas}
            label={({ dataEntry }) => {
              return dataEntry.value !== 0 ? dataEntry.value : null;
            }}
            animate
          />
        ) : (
          <></>
        )}

        {datas.map((data, idx) => (
          <div className="flex items-center mb-[10px] justify-center" key={idx}>
            <div
              className={`w-[30px] h-[30px] rounded-xl bg-[${data.color}]`}
            />
            <span className="text-2xl ml-4">{data.title}</span>
          </div>
        ))}


        <div className="my-24">
          <h1 className="text-[30px] mt-20 text-center">최근의 점수 분석</h1>
          <LineGraph className="" />
        </div>
      </div>
    </Frame>
  );
}
