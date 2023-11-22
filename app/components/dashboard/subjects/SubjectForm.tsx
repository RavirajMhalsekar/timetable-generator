"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
function SubjectForm() {
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
        footer={null}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
          First name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="John"
          required
        />
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">
          Last name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Flowbite"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </div>
      <div>
        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">
          Website URL
        </label>
        <input
          type="url"
          id="website"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="flowbite.com"
          required
        />
      </div>
      <div>
        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">
          Unique visitors (per month)
        </label>
        <input
          type="number"
          id="visitors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          required
        />
      </div>
    </div>
        
      </Modal>
    </div>
  );
}

export default SubjectForm;