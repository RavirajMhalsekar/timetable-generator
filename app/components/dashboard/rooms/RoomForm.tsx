"use client";
import React, { useState } from "react";
import { Modal, Input, InputNumber, Form, Button } from "antd";
import SubmitRoomData from "../../Database/SubmitRoomData";

const RoomForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [capacity, setCapacity] = useState<number | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCapacityChange = (value: number | undefined | null) => {
    setCapacity(value === null ? undefined : value);
  };

  const handleSubmit = async () => {
    const formData = {
      name,
      capacity,
    };

    await SubmitRoomData(formData);

    setName("");
    setCapacity(undefined);
    setIsModalOpen(false);
  };

  const submitFormData = async (name: string, capacity: number | undefined) => {
    // Logic to submit form data, e.g., API call
    console.log("Submitting form data:", name, capacity);
  };

  return (
    <>
      <Button
        className="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l"
        type="default"
        onClick={showModal}
      >
        Open Modal
      </Button>
      <Modal visible={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form onFinish={handleSubmit}>
          {/* Add a label for the room name */}
          <Form.Item>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <Input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter the room name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Capacity
            </label>
            <InputNumber
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter the room capacity"
              value={capacity}
              onChange={handleCapacityChange}
            />
          </Form.Item>
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group w-full"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Submit
            </span>
            <span className="relative invisible">Submit</span>
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default RoomForm;
