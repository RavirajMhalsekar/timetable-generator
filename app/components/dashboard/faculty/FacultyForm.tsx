"use client";
import React, { useState } from "react";
import { Modal, Input, Form, Select, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import SubmitFacultyData from "../../Database/SubmitFacultyData";

const { Option } = Select;

const FacultyForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [facultyName, setFacultyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [designation, setDesignation] = useState<string | undefined>(undefined);
  const [department, setDepartment] = useState<string | undefined>(undefined);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({
    facultyName: false,
    designation: false,
    department: false,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFacultyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFacultyName(e.target.value);
    handleFieldTouch("facultyName");
  };

  const handleDesignationChange = (value: string) => {
    setDesignation(value);
    handleFieldTouch("designation");
  };

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
    handleFieldTouch("department");
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
      facultyName: !facultyName.trim(),
      designation: !designation || designation === "undefined",
      department: !department || department === "undefined",
    };

    const anyEmptyField = Object.values(emptyFields).some((field) => field);

    if (anyEmptyField) {
      message.error("Please fill in all required fields.");
      setTouchedFields({
        facultyName: emptyFields.facultyName,
        designation: emptyFields.designation,
        department: emptyFields.department,
      });
      setIsLoading(false);
      return;
    }

    const formData = {
      facultyName: facultyName.trim(), 
      designation,
      department,
    };
    try {
      await SubmitFacultyData(formData);
      setTimeout(() => {
        setFacultyName("");
        setDesignation(undefined);
        setDepartment(undefined);
        setIsModalOpen(false);
        setIsLoading(false);
        setTouchedFields({
          facultyName: false,
          designation: false,
          department: false,
        });
      }, 700); 
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative">
      <div className="absolute top-1 right-1 z-50 ">
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
            Add Faculty
          </span>
        </button>
      </div>
      {isModalOpen && ( // Conditionally render the Modal
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              validateStatus={
                touchedFields.facultyName && !facultyName ? "error" : ""
              }
              help={
                touchedFields.facultyName && !facultyName
                  ? "Please enter faculty name"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <Input
                className={`border ${
                  touchedFields.facultyName && !facultyName && "border-red-500"
                } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the name.."
                value={facultyName}
                onChange={handleFacultyNameChange}
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                touchedFields.designation &&
                (!designation || designation === "undefined")
                  ? "error"
                  : ""
              }
              help={
                touchedFields.designation &&
                (!designation || designation === "undefined")
                  ? "Please select a designation"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Designation
              </label>
              <Select
                style={{ width: "100%", border: "none", height: 42 }} 
                placeholder="Select designation"
                value={designation}
                onChange={handleDesignationChange}
              >
                <Option value="Professor - Head of Department">
                  Professor - Head of Department
                </Option>
                <Option value="Associate Professor">Associate Professor</Option>
                <Option value="Assistant Professor">Assistant Professor</Option>
                <Option value="Assistant Professor (On Contract)">
                  Assistant Professor (On Contract)
                </Option>
              </Select>
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
                style={{ width: "100%", border: "none", height: 42 }} 
                placeholder="Select department"
                value={department}
                onChange={handleDepartmentChange}
              >
                <Option value="MECH">MECH</Option>
                <Option value="ECOMP">ECOMP</Option>
                <Option value="COMP">COMP</Option>
                <Option value="IT">IT</Option>
                <Option value="Humanities">Humanities</Option>
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

export default FacultyForm;
