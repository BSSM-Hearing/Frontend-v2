import React, { useEffect, useState } from "react";
import Frame from "../../../components/common/frame";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

export default function Real() {
  const [socket, setSocket] = useState();
  const [isChecking, setIsChecking] = useState(false);
  const router = useNavigate();
  const cancel = () => router("/");

  useEffect(() => {
    const socketIo = io(
      `http://10.150.149.2:3000/alarm?token=${localStorage.getItem("token")}`,
      {
        transports: ["websocket"],
      },
    );

    socketIo.connect();
    console.log(socketIo);

    setSocket(socketIo);
  }, []);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <Frame rollback>
      <div className="w-full h-full p-12 text-center">
        <div className="mt-[200px]">
          {!isChecking ? (
            <>
              <h1 className="text-[#1C69FF] text-6xl font-bold">
                보호자가 확인하는 중..
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-red-500">보호자가 오는 중..</h1>
            </>
          )}
        </div>
        <button
          type="button"
          className="rounded-full bg-[#1C69FF] text-white p-10 w-[150px] h-[150px] mt-[100px]"
          onClick={() => cancel()}
        >
          <h1 className="text-[40px] font-bold m-0">취소</h1>
        </button>
      </div>
    </Frame>
  );
}
