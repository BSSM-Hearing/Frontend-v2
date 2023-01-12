import React from "react";
import { theme } from "../../styles/theme";
import { getDateOnly } from "../../util/date";

export default function DashBoard({ slot }) {
  return (
    <div className="text-[28px] [&>h1]:mb-4 mx-auto fold-bold">
      <h1 className={`text-[${theme.deepMain}] text-8xl text-center font-bold`}>
        좋은 {slot}! 👋🏻
      </h1>
      <div className="flex flex-col items-center mt-24 font-bold">
        <div className="inline">
          <h2>오늘은</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>
              {getDateOnly()}
            </span>{" "}
            입니다.
          </h2>
          <h2>바깥 날씨는</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>맑음 (20ºC)</span>{" "}
            입니다.
          </h2>
          <h2>미세먼지는</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>좋음(30)</span> 입니다.
          </h2>
        </div>
      </div>
    </div>
  );
}
