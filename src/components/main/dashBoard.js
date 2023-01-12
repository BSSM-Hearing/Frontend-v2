import React from "react";
import { theme } from "../../styles/theme";
import { getDateOnly } from "../../util/date";

export default function DashBoard({ slot, weather, dust }) {
  const getStatus = (dust) => {
    if (dust <= 30) return "좋음";
    if (dust <= 80) return "보통";
    if (dust <= 120) return "나쁨";
    return "매우나쁨";
  };
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
            <span className={`text-[${theme.deepMain}]`}>
              {weather?.status} ({weather?.temp}ºC)
            </span>{" "}
            입니다.
          </h2>
          <h2>미세먼지는</h2>
          <h2 className="mb-3">
            {" "}
            <span className={`text-[${theme.deepMain}]`}>
              {getStatus(dust?.dust)}({dust?.dust})
            </span>{" "}
            입니다.
          </h2>
        </div>
      </div>
    </div>
  );
}
