import React from "react";
import { useMutationRunQuery } from "../hooks/query";
import SideChat from "./side-chat";

interface MessageProps {
  text: string;
}

interface Message {
  text: string;
  type: "bot" | "user";
}

const BotMessage = (props: MessageProps) => {
  return (
    <div className="flex flex-col mb-4 message">
      <div className="flex items-center justify-start">
        <img
          className="w-8 h-8 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="chat-user"
        />
        <span className="px-2 text-sm text-gray-400">Chatbot</span>
      </div>
      <div className="flex px-2 py-1 mt-2">
        <span className="text-sm text-gray1">{props.text}</span>
      </div>
    </div>
  );
};

const UserMessage = (props: MessageProps) => {
  return (
    <div className="flex flex-col items-end mb-4 message">
      <div className="flex items-center justify-end">
        <span className="px-2 text-sm text-blue-400">User</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="chat-user"
        />
      </div>
      <div className="flex px-2 py-1 mt-2 bg-blue-200 rounded-md rounded-tr-none">
        <span className="text-sm text-blue-600">{props.text}</span>
      </div>
    </div>
  );
};

const Chat = () => {
  const runQuery = useMutationRunQuery();

  const [updateSideChat, setUpdateSideChat] = React.useState("false");

  const [inputValue, setInputValue] = React.useState("");

  const [messages, setMessages] = React.useState<Message[]>([
    { text: "Hello, how can I help you today ?", type: "bot" },
  ]);

  const handleSubmitMessage = (message: string) => {
    if (!message) return;

    setMessages((prev) => [...prev, { text: message, type: "user" }]);

    try {
      const lastMessagesStr = localStorage.getItem("lastMessages") || "[]";
      const lastMessagesJson: string[] = JSON.parse(lastMessagesStr);
      lastMessagesJson.push(message);
      localStorage.setItem("lastMessages", JSON.stringify(lastMessagesJson));
      handleUpdateSideChat();
    } catch (error) {}

    runQuery.mutate(
      { query: message },
      {
        onSuccess: (data) => {
          let text: string =
            data?.result ||
            "Unexpected error occurred. Please try again later.";
          const keyword = "final answer:";

          const keywordIndex = text
            ?.toLowerCase()
            ?.indexOf(keyword.toLowerCase());

          if (keywordIndex !== -1) {
            text = text.slice(keywordIndex + keyword.length)?.trim();
            text = text?.charAt(0).toUpperCase() + text?.slice(1);
          }

          setMessages((prev) => [...prev, { text, type: "bot" }]);
        },
      }
    );

    if (message === inputValue) {
      setInputValue("");
    }
  };

  const handleUpdateSideChat = () => {
    setUpdateSideChat((prev) => (prev === "true" ? "false" : "true"));
  };

  return (
    <>
      <SideChat
        key={updateSideChat}
        handleSubmitMessage={handleSubmitMessage}
      />
      <div className="flex flex-col flex-1 w-full pl-4">
        <div className="flex mb-6 justify-between items-center border-b-2 border-gray-100 h-[58px]">
          <h2 className="py-2 text-xl font-light text-gray-400">Chat</h2>
          <div>
            <button
              onClick={() => {
                setMessages([
                  { text: "Hello, how can I help you today ?", type: "bot" },
                ]);
              }}
              className={`px-3 py-1.5 text-sm  bg-gray-200 text-gray-700 rounded-md active:opacity-80`}
            >
              Reset chat
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto messages h-full max-h-[300px]">
          {messages.map((message, index) => {
            if (message.type === "bot") {
              return <BotMessage key={index} text={message.text} />;
            } else {
              return <UserMessage key={index} text={message.text} />;
            }
          })}
          {runQuery.isPending && <BotMessage text="Loading..." />}
        </div>

        <div className="pt-4 flex-2">
          <div className="flex bg-white rounded-md write">
            <div className="flex-1">
              <textarea
                name="message"
                className="block w-full px-4 py-4 bg-gray-100 rounded-md outline-none"
                rows={1}
                placeholder="Type a message..."
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmitMessage(inputValue);
                  }
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
