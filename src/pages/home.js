import React from "react";
import Header from "../components/Header";
import Add from "../../src/icons/Add.svg";
import clipboard from "../../src/icons/clipboard.svg";

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center bg-white rounded-lg ">
        <div className="flex-start text-center">
          <span className="text-3xl font-bold text-gray-800">Estimate</span>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">
            <img src={Add} alt=""></img>
            Add item
          </button>
          <div className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">
          <img src={clipboard} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
