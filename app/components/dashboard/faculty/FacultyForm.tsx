"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
function FacultyForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="default" onClick={showModal}>
        Open Modal
      </Button>
      <button
        type="button"
        onClick={showModal}
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Purple to Pink
      </button>
      <Modal
      
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        
        <p>Some contents...</p>
        <p>Some contents...</p>
        
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default FacultyForm;
