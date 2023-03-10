import React, { useLayoutEffect, useState } from "react";
import Frame from "../../components/common/frame";
import { getKoreanDate, getSlot } from "../../util/date";
import QuickMenu from "../../components/main/quickMenu";
import DashBoard from "../../components/main/dashBoard";
import Statistics from "../../components/atom/statistics";
import { DownIcon } from "../../components/icon";
import { useNavigate } from "react-router-dom";
import instance from "../../lib/instance";

export default function Main() {
  const [date, setDate] = useState("");
  const [score, setScore] = useState();
  const [user, setUser] = useState();
  const [weather, setWeather] = useState();
  const [dust, setDust] = useState();
  const [dialog, setDialog] = useState();
  const router = useNavigate();

  useLayoutEffect(() => {
    instance.get("/user").then(({ data }) => {
      if (data) {
        setUser(data);
      } else {
        router("/login");
      }
    });

    instance.get("/score/today").then(({ data }) => setScore(data));
    instance.get("/dialog/get/today").then(({ data }) => setDialog(data));
    instance.get("http://10.150.149.2:8080").then(({ data }) => setDust(data));

    instance
      .get("http://localhost:3000/weather/data.json")
      .then(({ data }) => setWeather(data));

    setDate(getKoreanDate(new Date()));
    setInterval(() => {
      setDate(getKoreanDate(new Date()));
    }, 60000);
    return () => {
      clearInterval();
    };
  }, [router]);
  return (
    <Frame notice>
      <div className="p-8 w-full h-auto">
        <DashBoard slot={getSlot(new Date())} weather={weather} dust={dust} />

        <div
          className="flex justify-around mt-24 mb-[80px]"
          onClick={() => router("/analytic")}
        >
          <Statistics
            count={score?.todayScore}
            percent={score?.dialogPercent}
          />
          <Statistics
            count={dialog?.todayCnt}
            type="대화"
            percent={dialog?.dialogPercent}
          />
        </div>

        <button
          type="button"
          className="mx-auto block mb-10"
          onClick={() =>
            document
              .querySelector("#quick-menu")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <DownIcon />
        </button>
        <QuickMenu date={date} user={user} />
      </div>
    </Frame>
  );
}
