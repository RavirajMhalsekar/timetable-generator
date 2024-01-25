"use client";
import React, { useState } from "react";
import { Modal, Input, InputNumber, Form, notification, Select } from "antd";
import SubmitLabData from "../../Database/SubmitLabData";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

const LabForm: React.FC = () => {
  const [labName, setLabName] = useState<string>("");
  const [subName, setSubName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [labCapacity, setLabCapacity] = useState<number | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({
    labName: false,
    subName: false,
    department: false,
    labCapacity: false,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const emptyFields = {
      labName: !labName.trim(),
      subName: !subName.trim(),
      department: !department.trim(),
      labCapacity: labCapacity === undefined,
    };
    const anyEmptyField = Object.values(emptyFields).some((field) => field);

    if (anyEmptyField) {
      notification.error({
        message: "Please fill in all required fields.",
        placement: "topRight",
        duration: 3,
      });

      setTouchedFields({
        labName: emptyFields.labName,
        subName: emptyFields.subName,
        department: emptyFields.department,
        labCapacity: emptyFields.labCapacity,
      });

      setIsLoading(false);
      return;
    }

    const formData = {
      labName,
      subName,
      department,
      labCapacity,
    };

    try {
      await SubmitLabData(formData);
      notification.success({
        message: "Form data submitted successfully!",
        placement: "topRight",
        duration: 3,
      });

      setLabName("");
      setSubName("");
      setDepartment("");
      setLabCapacity(undefined);
      setIsModalOpen(false);
      setIsLoading(false);
    } catch (error) {
      notification.error({
        message: "Error submitting form data!",
        placement: "topRight",
        duration: 3,
      });
      setIsLoading(false);
    }
  };

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
    handleFieldTouch("department");
  };

  const handleCapacityChange = (value: number | undefined) => {
    setLabCapacity(value);
    handleFieldTouch("labCapacity");
  };

  const handleFieldTouch = (fieldName: string) => {
    setTouchedFields((prevFields) => ({
      ...prevFields,
      [fieldName]: true,
    }));
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
            Add Lab
          </span>
        </button>
      </div>
      {isModalOpen && ( // Conditionally render the Modal
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              validateStatus={touchedFields.labName && !labName ? "error" : ""}
              help={
                touchedFields.labName && !labName
                  ? "Please enter the lab name"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Lab Name
              </label>
              <Input
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter the lab name"
                value={labName}
                onChange={(event) => setLabName(event.target.value)}
              />
            </Form.Item>
            <Form.Item
              validateStatus={touchedFields.subName && !subName ? "error" : ""}
              help={
                touchedFields.subName && !subName
                  ? "Please enter the subject name"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Subject Name
              </label>
              <Input
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter the subject name"
                value={subName}
                onChange={(event) => setSubName(event.target.value)}
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                touchedFields.department &&
                (!department || department === "undefined")
                  ? "error"
                  : ""
              }
              help={
                touchedFields.department &&
                (!department || department === "undefined")
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
                <Option value="undefined" disabled>
                  Select an option
                </Option>
                <Option value="Mech">Mechanical</Option>
                <Option value="Ecomp">ECOMP</Option>
                <Option value="Comp">Computer</Option>
                <Option value="IT">IT</Option>
              </Select>
            </Form.Item>

            <Form.Item
              validateStatus={touchedFields.labCapacity && labCapacity === undefined ? "error" : ""}
              help={touchedFields.labCapacity && labCapacity === undefined ? "Please enter the lab capacity" : ""}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Capacity
              </label>
              <InputNumber
                type="number"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter the lab capacity"
                value={labCapacity}
                onChange={(value) => setLabCapacity(value === null ? undefined : value)}
              />
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
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
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

export default LabForm;
