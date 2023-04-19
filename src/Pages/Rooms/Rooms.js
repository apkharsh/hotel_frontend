import React, { useState,useEffect } from "react";
import bg from "../../Assets/bg.jpg";
import Modal from "./Modal";
import { CloseIcon, CubeIcon } from "../../Components/Icons";
import { AnimatePresence, motion } from "framer-motion";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (val) => {
    setIsOpen(val);
  };

  const getAllRooms = async () => {
    const res = await fetch("http://localhost:5000/api/rooms/all");
    const data = await res.json();
    setRooms(data.rooms);
  }

  useEffect(()=>{
    getAllRooms();
  },[])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className="flex flex-col gap-5 h-full overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl lg:text-5xl font-black flex items-center gap-2">
          Rooms
          <span>
            <CubeIcon className="w-10 h-10" />
          </span>
        </h1>
        <button
          onClick={() => handleModal(true)}
          className="hover:scale-105 transition-all ease-linear"
        >
          <CloseIcon className="rotate-45 w-8 h-8" />
        </button>
      </div>

      <div className="border-t border-gray-400"></div>

      {rooms.map((room) => {
        return (
        <div className="h-full flex gap-5">
        <div className="min-w-[13rem] max-w-[14rem] max-h-[13rem] relative shadow-md hover:shadow-xl transition-all ease-linear rounded-2xl flex flex-col overflow-hidden bg-white">
          <div className="flex justify-between text-sm p-2">
            <p className="bg- px-3 py-1 rounded-full"> Room No. {room.roomNumber}</p>
            <p className="bg-black px-3 py-1 text-white rounded-full"> Type </p>
          </div>
          <div className="h-14 w-full">
            <img
              src={bg}
              alt="background"
              className="w-full h-14 object-cover object-center"
            />
          </div>
          <div className="h-full px-2 pt-4 ">
            <h1 className="text-2xl font-bold">{room.roomType}</h1>
            <p className="text-xl font-semibold">{room.price}</p>
          </div>
        </div>
      </div>
        );
      })}
      
      <AnimatePresence>
        {isOpen && <Modal handleModal={handleModal} />}
      </AnimatePresence>
    </motion.div>
  );
}
