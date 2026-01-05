import React from "react";
import { USER_AVATAR } from "../../../constant/constant";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center mt-2 p-2 bg-gray-100 shadow-sm">
        <img className="w-[36px] h-[36px]" src={USER_AVATAR} alt="icon" />
        <div className="ml-4">
          <p>{name}</p>
          <p className="">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
