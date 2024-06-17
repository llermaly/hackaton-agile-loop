import React from "react";
import { useQueryPing } from "../hooks/ping";

const Header = () => {
  const ping = useQueryPing();

  const getStatusText = () => {
    if (ping.isLoading) {
      return "Loading...";
    }

    if (ping.isError) {
      return "Offline";
    }

    if (ping.data?.ok) {
      return "Online";
    }
  };

  const getStatusColor = () => {
    if (ping.isLoading) {
      return "bg-blue-400";
    }

    if (ping.isError) {
      return "bg-red-400";
    }

    if (ping.data?.ok) {
      return "bg-green-400";
    }
  };

  return (
    <div className="flex flex-row py-4 flex-2">
      <div className="flex-1">
        <span className="inline-block text-gray-700 align-bottom xl:hidden hover:text-gray-900">
          <span className="block w-6 h-6 p-1 rounded-full hover:bg-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </span>
        <span className="inline-block ml-8 text-gray-700 align-bottom lg:hidden hover:text-gray-900">
          <span className="block w-6 h-6 p-1 rounded-full hover:bg-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </span>
        </span>
      </div>
      <div className="items-center flex-1 text-right">
        <span className="inline-block text-gray-700">
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <span
              className={
                "inline-block w-4 h-4 align-text-bottom  rounded-full " +
                getStatusColor()
              }
            ></span>{" "}
            <b>{getStatusText()}</b>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
