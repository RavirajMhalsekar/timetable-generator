
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import List from "./FormList";
import Modal from "./MeetingInfoForm";
import moment, { Moment } from "moment";

interface Data {
  name: string;
  date: Moment ;
  time: Moment ;
}

const MeetingPage: React.FC = () => { 
  const storageKey = "meetingPageData"; // Unique key for LabsPage
  const [data, setData] = useState<Data[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveData = (name: string, date: Moment , time: Moment ) => {
    if (!name || !date || !time) return;
    const newData: Data = {
      name: name,   
      date: date,
      time: time, 
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
        <h1 className="text-indigo-500 text-bold">Meeting Information</h1>
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
        handleSaveData={handleSaveData}
        setModalVisible={setModalVisible}
      />

    </div>
  );
};

export default MeetingPage;
