"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import List from "./FormList";
import Modal from "./FacultyForm";


interface Data {
  facultyName: string;
  faculyDescription: string;
  facultyImage:string
}

const RoomPage: React.FC = () => { 
  const storageKey = "facultyPageData"; // Unique key for RoomPage
  const [data, setData] = useState<Data[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveFacultyData = (facultyName: string, faculyDescription: string, facultyImage: string) => {
    if (!facultyName || !faculyDescription || !facultyImage) return;
    const newData: Data = {
      facultyName: facultyName,
      faculyDescription: faculyDescription,
      facultyImage: facultyImage, // Store the Base64 string of the image
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
              <h1 className="text-indigo-500 ">Faculty</h1>
              <div className="mt-10">
        <Button
          
          type="button"
          onClick={() => setModalVisible(true)} 
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none  font-medium rounded-lg text-sm px-7 py-5.5 text-center me-2 mb-2"
        >
          Add Data
        </Button>
        </div>
        <div className="mt-48">
      <List data={data} onDelete={handleDelete} />
      </div>
      <Modal
        modalVisible={modalVisible}
        handleSaveFacultyData={handleSaveFacultyData}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default RoomPage;
