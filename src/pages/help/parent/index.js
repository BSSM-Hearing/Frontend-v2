import React, { useEffect, useState } from "react";
import Frame from "../../../components/common/frame";
import { io } from "socket.io-client";
import instance from "../../../lib/instance";
import { getKoreanDate } from "../../../util/date";

export default function Parent() {
  const [socket, setSocket] = useState();
  const [al, setAl] = useState([]);

  useEffect(() => {
    const options = {
      transports: ["websocket"],
    };
    const socketIo = io(
      `http://10.150.149.2:3000/alarm?token=${localStorage.getItem("token")}`,
      options,
    );

    socketIo.io.opts.query = {
      token: localStorage?.getItem("token"),
    };

    socketIo.connect();
    console.info(socketIo);

    setSocket(socketIo);

    instance.get("/alarm").then(({ data }) => setAl(data));
  }, []);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <Frame>
      <div className="w-full h-full p-12 text-center">
        {al
          .slice(-5)
          .reverse()
          .map((data, idx) => (
            <p
              key={idx}
              className={`cursor-pointer text-[30px] bg-[${idx === 0 ? "#1C69ff" : "transparent"}] color-black text-white font-bold p-12 m-12 fold-[900] rounded-xl duration-300 hover:text-black hover:bg-[#98E5FB]`}
              onClick={() => {
                socket.emit("alarm", {
                  alarmId: data.alarmId,
                });
                window.alert("자녀에게 알람을 전송했어요!");
              }}
            >
              도움을 요청했어요! <br />
              <span className="text-[24px]">
                {getKoreanDate(new Date(data.createdAt))}
              </span>
            </p>
          ))}
      </div>
    </Frame>
  );
}
