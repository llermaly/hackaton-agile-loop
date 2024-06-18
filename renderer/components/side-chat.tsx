import React, { useEffect } from "react";

interface SideChatProps {
  handleSubmitMessage: (message: string) => void;
}

const SideChat = (props: SideChatProps) => {
  const [lastMessages, setLastMessages] = React.useState<string[]>([]);

  useEffect(() => {
    const lastMessages = localStorage.getItem("lastMessages");
    if (lastMessages) {
      setLastMessages(JSON.parse(lastMessages));
    }
  }, []);

  return (
    <div className="flex-col hidden w-1/3 pr-6 sidebar lg:flex flex-2">
      <div className="px-2 pb-6 search flex-2">
        <input
          type="text"
          className="block w-full py-2 bg-transparent border-b-2 border-gray-200 outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex-1 h-full px-2 overflow-auto">
        {lastMessages?.reverse()?.map((message, index) => (
          <div
            key={index}
            onClick={() => props.handleSubmitMessage(message)}
            className="flex p-2 mb-4 transition-transform duration-300 transform bg-white rounded shadow-md cursor-pointer entry hover:scale-105"
          >
            <div className="flex-1 px-2">
              <div>
                <p className="text-sm text-gray-600">{message}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            localStorage.removeItem("lastMessages");
            setLastMessages([]);
          }}
          disabled={lastMessages.length === 0}
          className="flex justify-center w-full p-2 mb-4 text-sm text-white transition-transform duration-300 transform bg-blue-600 rounded shadow-md cursor-pointer entry hover:scale-105 disabled:hover:scale-100 disabled:cursor-default disabled:bg-gray-400 "
        >
          Clear history
        </button>
      </div>
    </div>
  );
};

export default SideChat;
