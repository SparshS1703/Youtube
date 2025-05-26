import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const [liveMsg, setLiveMsg]=useState("")
  
  

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("API called");
      dispatch(
        addMessage({
          name: "abc",
          message: "yo wassup my homie !!!!",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
    <div className="ml-2 p-2 w-full h-[480px] border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse ">
      {
      chatMessages.map((msg,index) => (
        <ChatMessage key={index} name={msg.name} message={msg.message} />
      ))
      }
    </div>
    <form className="border border-black p-1 m-2 rounded-lg w-full flex" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Sparsh",
            message:liveMsg

        }));
        setLiveMsg("");
    }}>
        <input className="w-96 p-2 mx-2" type="text" value={liveMsg} onChange={(e)=>{
            setLiveMsg(e.target.value);
        }}></input>
        <button className="bg-gray-200  w-1/5 rounded-lg">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
