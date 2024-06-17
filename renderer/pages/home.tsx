import type { NextPage } from "next";
import Head from "next/head";
import Sidemenu from "../components/side-menu";
import Header from "../components/header";
import SideChat from "../components/side-chat";
import Chat from "../components/chat";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agile Loop Hackathon</title>
        <meta name="description" content="Agile Loop Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen">
        <div className="flex h-full">
          <Sidemenu />
          <div className="flex-1 w-full h-full bg-gray-100">
            <div className="container flex flex-col w-11/12 h-full m-auto main-body">
              <Header />
              <div className="flex flex-col flex-1 main">
                <div className="hidden lg:block heading flex-2">
                  <h1 className="mb-4 text-3xl text-gray-700">Chat</h1>
                </div>

                <div className="flex flex-1 h-full">
                  <SideChat />
                  <Chat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
