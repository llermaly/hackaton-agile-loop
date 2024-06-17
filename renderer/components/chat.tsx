import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col flex-1 chat-area">
      <div className="flex-3">
        <h2 className="py-1 mb-8 text-xl border-b-2 border-gray-200">
          Chatting with <b>Mercedes Yemelyan</b>
        </h2>
      </div>
      <div className="flex-1 overflow-auto messages">
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
            <div className="inline-block p-2 px-6 text-gray-700 bg-gray-300 rounded-full">
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className="pl-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
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
            <div className="inline-block p-2 px-6 text-gray-700 bg-gray-300 rounded-full">
              <span>All travel expenses are covered by us of course :D</span>
            </div>
            <div className="pl-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
        <div className="flex mb-4 text-right message me">
          <div className="flex-1 px-2">
            <div className="inline-block p-2 px-6 text-white bg-blue-600 rounded-full">
              <span>It's like a dream come true</span>
            </div>
            <div className="pr-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
        <div className="flex mb-4 text-right message me">
          <div className="flex-1 px-2">
            <div className="inline-block p-2 px-6 text-white bg-blue-600 rounded-full">
              <span>I accept. Thank you very much.</span>
            </div>
            <div className="pr-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
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
            <div className="inline-block p-2 px-6 text-gray-700 bg-gray-300 rounded-full">
              <span>You are welome. We will stay in touch.</span>
            </div>
            <div className="pl-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-10 flex-2">
        <div className="flex bg-white rounded-lg shadow write">
          <div className="flex items-center content-center p-4 pr-0 text-center flex-3">
            <span className="block text-center text-gray-400 hover:text-gray-800">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1">
            <textarea
              name="message"
              className="block w-full px-4 py-4 bg-transparent outline-none"
              rows={1}
              placeholder="Type a message..."
              autoFocus
            ></textarea>
          </div>
          <div className="flex items-center content-center w-32 p-2 flex-2">
            <div className="flex-1 text-center">
              <span className="text-gray-400 hover:text-gray-800">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </span>
              </span>
            </div>
            <div className="flex-1">
              <button className="inline-block w-10 h-10 bg-blue-400 rounded-full">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
