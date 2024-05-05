"use client";
import React, { useState } from "react";
import { Modal, Input, InputNumber, Form, notification, Select } from "antd";
import SubmitRoomData from "../../Database/SubmitRoomData";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

const RoomForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [capacity, setCapacity] = useState<number | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [department, setDepartment] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    capacity: false,
    department: false,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleCapacityChange = (value: number | undefined | null) => {
    setCapacity(value || undefined);
    handleFieldTouch("capacity");
  };

  const resetForm = () => {
    setName("");
    setCapacity(undefined);
    setDepartment("");
    setTouchedFields({
      name: false,
      capacity: false,
      department: false,
    });
  };

  const handleFieldTouch = (field: string) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const emptyFields = {
      name: !name.trim(),
      capacity: capacity === undefined,
      department: !department.trim(),
    };

    const anyEmptyField = Object.values(emptyFields).some((field) => field);

    if (anyEmptyField) {
      notification.error({
        message: "Please fill in all required fields.",
        placement: "topRight",
        duration: 3,
      });

      setTouchedFields({
        name: emptyFields.name,
        capacity: emptyFields.capacity,
        department: emptyFields.department,
      });

      setIsLoading(false);
      return;
    }

    const formData = {
      name,
      capacity,
      department,
    };

    try {
      await SubmitRoomData(formData);
      resetForm();
      setIsModalOpen(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-1 right-1 z-50">
        <button
          onClick={showModal}
          className="rounded-md px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 hover:text-white"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="flex items-center relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Add Room
          </span>
        </button>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              validateStatus={touchedFields.name && !name.trim() ? "error" : ""}
              help={
                touchedFields.name && !name.trim()
                  ? "Please enter a room name"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <Input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  handleFieldTouch("name");
                }}
                className={`bg-gray-50 border ${
                  touchedFields.name && !name.trim()
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the room name"
              />
            </Form.Item>

            <Form.Item
              validateStatus={
                touchedFields.capacity && capacity === undefined ? "error" : ""
              }
              help={
                touchedFields.capacity && capacity === undefined
                  ? "Please enter the room capacity"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Capacity
              </label>
              <InputNumber
                type="number"
                value={capacity}
                onChange={handleCapacityChange}
                className={`bg-gray-50 border ${
                  touchedFields.capacity && capacity === undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the room capacity"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                touchedFields.department && !department.trim() ? "error" : ""
              }
              help={
                touchedFields.department && !department.trim()
                  ? "Please select a department"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Department
              </label>
              <Select
                placeholder="Select Department"
                value={department}
                onChange={(value) => {
                  setDepartment(value);
                  handleFieldTouch("department");
                }}
                style={{ height: 42 }}
              >
                <Option value="">Select an option</Option>
                <Option value="MECH">Mechanical</Option>
                <Option value="ECOMP">ECOMP</Option>
                <Option value="COMP">Computer</Option>
                <Option value="IT">IT</Option>
              </Select>
            </Form.Item>

            <div className="flex justify-center items-center mb-8 ">
              {isLoading ? (
                <div className="text-center b gap-2 w-full inline-flex items-center justify-center p-4 px-6 py-3 bg-gray-100 border-2 border-purple-500 rounded-lg shadow-md text-indigo-600 text-base">
                  <LoadingOutlined style={{ fontSize: 24 }} spin /> Loading...
                </div>
              ) : (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Submit
                  </span>
                  <span className="relative invisible">Submit</span>
                </button>
              )}
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default RoomForm;
