import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atom/button";
import {
  CellPhoneIcon,
  GuardIcon,
  TalkingPeopleIcon,
  VibrationPhoneIcon,
} from "../icon";

export default function quickMenu({ date, user }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useNavigate();
  return (
    <div className="mb-[70px]" id="quick-menu">
      <div className="flex flex-col items-center">
        <h2 className="mt-24 text-[36px] font-bold">{date}</h2>
        <p className="inline text-[30px] mt-7">
          <span className="text-[#1C69FF]">{user?.nickname} </span> 님, <br />{" "}
          무엇이 필요하신가요?
        </p>
      </div>
      <div className="grid grid-cols-[1fr_1fr] grid-rows-2 mt-8">
        <div>
          <Button className="bg-[#1C69FF]" onClick={() => router("/callMode")}>
            <CellPhoneIcon />
          </Button>
          <h4 className="text-4xl text-center">전화 모드</h4>
        </div>

        <div>
          <Button className="bg-[#373737]" onClick={() => router("/nearsound")}>
            <VibrationPhoneIcon />
          </Button>
          <h4 className="text-4xl text-center">외출 모드</h4>
        </div>

        <div>
          <Button className="bg-[#98E5D4]" onClick={() => router("/practice")}>
            <TalkingPeopleIcon />
          </Button>
          <h4 className="text-4xl text-center">발음 연습</h4>
        </div>

        <div>
          <Button className="bg-[#F6CE60]" onClick={() => router("/help")}>
            <GuardIcon />
          </Button>
          <h4 className="text-4xl text-center">보호자 호출</h4>
        </div>
      </div>
    </div>
  );
}
