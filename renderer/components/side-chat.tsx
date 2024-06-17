import React from "react";

const SideChat = () => {
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
        <div className="flex p-4 mb-4 transition-transform duration-300 transform bg-white rounded shadow-md cursor-pointer entry hover:scale-105">
          <div className="flex-2">
            <div className="relative w-12 h-12">
              <img
                className="w-12 h-12 mx-auto rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="chat-user"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="w-32 truncate">
              <span className="text-gray-800">Ryann Remo</span>
            </div>
            <div>
              <small className="text-gray-600">Yea, Sure!</small>
            </div>
          </div>
          <div className="text-right flex-2">
            <div>
              <small className="text-gray-500">15 April</small>
            </div>
            <div>
              <small className="inline-block w-6 h-6 text-xs leading-6 text-center text-white bg-red-500 rounded-full">
                23
              </small>
            </div>
          </div>
        </div>
        <div className="flex p-4 mb-4 transition-transform duration-300 transform bg-white rounded shadow-md cursor-pointer entry hover:scale-105">
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
            <div className="w-32 truncate">
              <span className="text-gray-800">Karp Bonolo</span>
            </div>
            <div>
              <small className="text-gray-600">Yea, Sure!</small>
            </div>
          </div>
          <div className="text-right flex-2">
            <div>
              <small className="text-gray-500">15 April</small>
            </div>
            <div>
              <small className="inline-block w-6 h-6 text-xs leading-6 text-center text-white bg-red-500 rounded-full">
                10
              </small>
            </div>
          </div>
        </div>
        <div className="flex p-4 mb-4 transition-transform duration-300 transform bg-white border-l-4 border-red-500 rounded shadow-md cursor-pointer entry hover:scale-105">
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
            <div className="w-32 truncate">
              <span className="text-gray-800">Mercedes Yemelyan</span>
            </div>
            <div>
              <small className="text-gray-600">Yea, Sure!</small>
            </div>
          </div>
          <div className="text-right flex-2">
            <div>
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
        <div className="flex p-4 mb-4 transition-transform duration-300 transform bg-white rounded shadow-md cursor-pointer entry hover:scale-105">
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
            <div className="w-32 truncate">
              <span className="text-gray-800">Cadi Kajetán</span>
            </div>
            <div>
              <small className="text-gray-600">Yea, Sure!</small>
            </div>
          </div>
          <div className="text-right flex-2">
            <div>
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
        <div className="flex p-4 mb-4 transition-transform duration-300 transform bg-white rounded shadow-md cursor-pointer entry hover:scale-105">
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
            <div className="w-32 truncate">
              <span className="text-gray-800">Rina Samuel</span>
            </div>
            <div>
              <small className="text-gray-600">Yea, Sure!</small>
            </div>
          </div>
          <div className="text-right flex-2">
            <div>
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideChat;
