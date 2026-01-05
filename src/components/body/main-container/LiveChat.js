import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      //API polling
      console.log("API Polling!!🙏🏻");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-3 p-3 w-[282px] h-[500px] border border-blue-100 bg-slate-100 rounded-lg">
      <ChatMessage name={"Arjun"} message={"Hi message from chat"} />
      <ChatMessage name={"Arjun"} message={"Hi message from chat"} />
      <ChatMessage name={"Arjun"} message={"Hi message from chat"} />
      <ChatMessage name={"Arjun"} message={"Hi message from chat"} />
    </div>
  );
};

export default LiveChat;
