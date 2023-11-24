"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import List from "./FormList";
import Modal from "./RoomForm";


interface Data {
  name: string;
  capacity: string;
}

const RoomPage: React.FC = () => { 
  const storageKey = "roomPageData"; // Unique key for RoomPage
  const [data, setData] = useState<Data[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveRoomData = (name: string, capacity: string) => {
    if (!name || !capacity) return;
    const newData: Data = {
      name: name,
      capacity: capacity,
    };
    const updatedData = [...data, newData];

    setData(updatedData);
    setModalVisible(false);

    localStorage.setItem(storageKey, JSON.stringify(updatedData));

  };

  useEffect(() => {
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
      <div className="App">  
      <div className="bg-white shadow-lg shadow-indigo-200 rounded-xl p-4 ">
              <h1 className="text-indigo-900 font-bold text-3xl">Rooms</h1>
              </div>
              <div className="mt-8 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
              <div className="mt-10">
              
        <Button
          
          type="button"
          onClick={() => setModalVisible(true)} 
          className="text-white  focus:outline-none hover:bg-indigo-900 font-medium rounded-lg text-sm px-7 py-5.5 text-center me-2 mb-2"
        > 
          Add Data
        </Button>
        </div>
        <div className="mt-10">
      
      <List data={data} onDelete={handleDelete} />
      </div>
      </div>
      <Modal
        modalVisible={modalVisible}
        handleSaveRoomData={handleSaveRoomData}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default RoomPage;
