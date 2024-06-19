import React from "react";
import { useMutationRunQuery } from "../hooks/query";
import SideChat from "./side-chat";

const exampleMessages = [
  "Get the total duration of my tasks in monday for the board agileloop",
  "Generate a stripe payment link for 3 hour of development",
  "Send an email to maxxii.2420@gmail with subject 'Payment Link' and content 'Here is the payment link: https://stripe.com/link'",
];

interface MessageProps {
  text: string;
}

interface Message {
  text: string;
  type: "bot" | "user";
}

const BotMessage = (props: MessageProps) => {
  return (
    <div className="flex mb-4 message">
      <div className="flex-2">
        <div className="relative w-12 h-12">
          <img
            className="w-12 h-12 mx-auto rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="chat-user"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></span>
        </div>
      </div>
      <div className="flex-1 px-2">
        <div className="inline-block p-2 px-6 text-gray-700 bg-gray-300 rounded-md">
          <span>{props.text}</span>
        </div>
        <div className="pl-4">
          <small className="text-gray-500">15 April</small>
        </div>
      </div>
    </div>
  );
};

const UserMessage = (props: MessageProps) => {
  return (
    <div className="flex mb-4 text-right message me">
      <div className="flex-1 px-2">
        <div className="inline-block p-2 px-6 text-white bg-blue-600 rounded-md">
          <span>{props.text}</span>
        </div>
        <div className="pr-4">
          <small className="text-gray-500">15 April</small>
        </div>
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
      <div className="flex flex-col flex-1 chat-area">
        <div className="flex-3">
          <h2 className="py-1 mb-8 text-xl border-b-2 border-gray-200">
            Chatting with <b>Agile Loop Bot</b>
          </h2>
        </div>
        <div className="flex-1 overflow-auto messages max-h-[400px]">
          {messages.map((message, index) => {
            if (message.type === "bot") {
              return <BotMessage key={index} text={message.text} />;
            } else {
              return <UserMessage key={index} text={message.text} />;
            }
          })}
          {runQuery.isPending && <BotMessage text="Loading..." />}
        </div>
        <div className="flex flex-col gap-2">
          {messages.length === 1 &&
            exampleMessages.map((message, index) => (
              <div
                onClick={() => handleSubmitMessage(message)}
                className="p-2 text-gray-400 transition-all bg-white rounded-md shadow-md cursor-pointer entry hover:scale-105"
                key={index}
              >
                {message}
              </div>
            ))}
        </div>
        <div className="pt-4 pb-10 flex-2">
          <div className="flex bg-white rounded-lg shadow write">
            <div className="flex-1">
              <textarea
                name="message"
                className="block w-full px-4 py-4 bg-transparent outline-none"
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
