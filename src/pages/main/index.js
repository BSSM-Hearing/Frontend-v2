import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState();
  useEffect(() => {
    instance.get("/user").then(({ data }) => setUser(data));

    setDate(getKoreanDate(new Date()));
    setInterval(() => {
      setDate(getKoreanDate(new Date()));
    }, 60000);
    return () => {
      clearInterval();
    };
  }, []);
  const router = useNavigate();
  return (
    <Frame notice>
      <div className="p-8 w-full h-auto">
        <DashBoard slot={getSlot(new Date())} />

        <div
          className="flex justify-around mt-24 mb-[80px]"
          onClick={() => router("/analytic")}
        >
          <Statistics count="10" type="대화" percent="10" />
          <Statistics count="100" percent="10" />
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
