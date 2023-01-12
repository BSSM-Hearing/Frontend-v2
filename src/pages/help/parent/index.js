import React, { useEffect, useState } from "react";
import Frame from "../../../components/common/frame";
import { io } from "socket.io-client";

export default function Parent() {
  const [socket, setSocket] = useState();

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
      <div className="w-full h-full p-12 text-center"></div>
    </Frame>
  );
}
