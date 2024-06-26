import React, { useEffect } from "react";

interface SideChatProps {
  handleSubmitMessage: (message: string) => void;
}

const mockLastMessages = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const exampleActions = [
  {
    name: "Monday tasks duration",
    text: "Get the total duration of my tasks in monday for the board agileloop",
  },
  {
    name: "Stripe payment link",
    text: "Generate a stripe payment link for 3 hour of development",
  },
  {
    name: "Send an email",
    text: "Send an email to maxxii.2420@gmail with subject 'Payment Link' and content 'Here is the payment link: https://stripe.com/link'",
  },
];

const ActionItem = ({ name, text, ...rest }) => {
  return (
    <div
      className="flex mb-3 transition-transform duration-300 transform bg-gray-100 rounded-md cursor-pointer entry"
      {...rest}
    >
      <div className="p-3 pb-3.5">
        <div>
          <span className="text-sm font-semibold text-blue-600">{name}</span>
          <p className="text-sm text-gray2">{text}</p>
        </div>
      </div>
    </div>
  );
};

const SideChat = (props: SideChatProps) => {
  const [lastMessages, setLastMessages] =
    React.useState<string[]>(mockLastMessages);

  const [tab, setTab] = React.useState("quick");

  useEffect(() => {
    const lastMessages = localStorage.getItem("lastMessages");
    if (lastMessages) {
      setLastMessages(JSON.parse(lastMessages));
    }
  }, []);

  return (
    <div className="flex-col hidden pr-4 border-r-2 border-gray-100 sidebar lg:flex flex-2 max-w-[350px]">
      <div className="flex items-center justify-between gap-8 h-[40px]">
        <h1 className="text-xl font-light text-gray-400">Quick actions</h1>
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => setTab("quick")}
            className={`px-3 py-1.5 text-sm  ${
              tab === "quick"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            } rounded-md active:opacity-80`}
          >
            Quick actions
          </button>
          <button
            onClick={() => setTab("history")}
            className={`px-3 py-1.5 text-sm  ${
              tab === "history"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-md active:opacity-80`}
          >
            History
          </button>
        </div>
      </div>
      <div className="flex-1 h-full pt-4 mt-4 overflow-auto border-t-2 border-gray-100">
        {tab === "history" && (
          <>
            {lastMessages?.reverse()?.map((message, index) => (
              <ActionItem
                key={index}
                name="Action"
                text={message}
                onClick={() => props.handleSubmitMessage(message)}
              />
            ))}
            <button
              onClick={() => {
                localStorage.removeItem("lastMessages");
                setLastMessages([]);
              }}
              disabled={lastMessages.length === 0}
              className="flex justify-center w-full p-2 mb-4 text-sm text-white transform bg-blue-600 rounded-md cursor-pointer disabled:hover:scale-100 disabled:cursor-default disabled:bg-gray-400 active:bg-opacity-80"
            >
              Clear history
            </button>
          </>
        )}
        {tab === "quick" && (
          <>
            {exampleActions?.reverse()?.map((ac, index) => (
              <ActionItem
                key={index}
                name={ac.name}
                text={ac.text}
                onClick={() => props.handleSubmitMessage(ac.text)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SideChat;
