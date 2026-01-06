import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../../../store/chatSlice";
import { generateGUID, generateRandomMessage, generateRandomName } from "../../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState();
  const chatMessages = useSelector((store)=> store.chat.messages)
  useEffect(() => {
    const interval = setInterval(() => {
      //API polling
      console.log("API Polling!!🙏🏻");
      dispatch(
        addMessages({
          id: generateGUID(),
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="mx-3 p-3 w-[380px] h-[500px] border border-blue-100 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((i,index)=>
      <ChatMessage key={i.id} name={i.name} message={i.message} />
    )}
    </div>
    <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessages({
        id: generateGUID(),
        name:"Arjun Khade",
        message: liveMessage
      }))
      setLiveMessage("")
    }}>
      <input className=" p-2 m-2 w-[300px] border border-black" value={liveMessage} type="text " onChange={(e)=>{
        setLiveMessage(e.target.value)
      }}></input>
      <button className="p-2 m-2 bg-green-300 " type="submit">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
