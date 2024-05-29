import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/conf.jpg";
import Navbar from "./components/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode =(e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className="overflow-y-scroll no-scrollbar ">
    {/* Navbar */}

    <Navbar />
    {/* Hero */}
    <div className="relative h-screen">
      {/* Image */}
    <div className="absolute h-full w-full flex overflow-hidden ">
      <img src={conf} className="object-cover w-full h-full " /> 
      </div>
      {/*Overlay*/}
      <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
      {/* Hero Info */}
      <div className="lg:flex lg:pt-12 flex-col items-center justify-center relative z-10 px-6 ">
        {/* Main */}
      <div className="">
        <h1 className="text-[56px] md:text-[80px] text-white font-bold pt-6">Video Chat App</h1>
        <p className="text-[26px] text-white mx-2">By Sonam</p>
      </div>

        {/* Enter Code */}
      <form onSubmit={submitCode} className="w-screen h-screen flex flex-col items-center">

          <div className="flex flex-col justify-center items-center">
             <label className="font-bold text-[32px] pt-12">
                       Enter Room Code
                    </label> 
                <input
                 type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="bg-blue-500 placeholder:text-white py-2 w-[16rem] rounded-full pl-8 mt-4"
              />
         </div>
              <button
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-400 duration-100 ease-out rounded-[0.5rem] mt-4 py-1.5 px-4 font-bold ">
                    Go
                </button>


                </form>
            </div>

           
          
            </div>
         </div>
        );
      };

export default Home;