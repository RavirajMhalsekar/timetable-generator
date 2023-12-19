"use client";
import React, { useState } from "react";
import { Modal, Input, Form, Upload, Button, Select, message, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";
import SubmitFacultyData from "../../Database/SubmitFacultyData";
import type { UploadProps } from 'antd';

const { Option } = Select;

const FacultyForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [facultyName, setFacultyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [designation, setDesignation] = useState<string | undefined>(undefined);
  const [department, setDepartment] = useState<string | undefined>(undefined);
  const [fileList, setFileList] = useState<any[]>([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFacultyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFacultyName(e.target.value);
  };

  const handleDesignationChange = (value: string) => {
    setDesignation(value);
  };

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
  };

  const handleFileChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", fileList[0]?.originFileObj);

    try {
      const response = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imagePath = await response.json();

        await SubmitFacultyData({
          name: facultyName,
          designation,
          department,
          imagePath,
        });

        notification.success({
          message: "Form data submitted successfully!",
          placement: "topRight",
          duration: 3,
        });

        setIsModalOpen(false);
        setIsLoading(false);
      } else {
        message.error("Failed to upload image.");
        notification.error({
          message: "Error submitting form data!",
          placement: "topRight",
          duration: 3,
        });
        setIsLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Error submitting form data!",
        placement: "topRight",
        duration: 3,
      });
      setIsLoading(false);
    }
  };

  const props: UploadProps = {
    action: '/api/uploadImage',
    listType: 'picture',
    fileList,
    onChange: handleFileChange,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      return isJpgOrPng ? true : Upload.LIST_IGNORE;
    },
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between pb-12">
        {/* <p className="text-gray-700">Want to add a new room?</p> */}
      </div>
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
          <Form.Item>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <Input
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter the name.."
              value={facultyName}
              onChange={handleFacultyNameChange}
            />
          </Form.Item>
          <Form.Item>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Designation
            </label>
            <Select
              style={{ width: "100%", border: "none", height: 42 }} // Adjust width and border as needed
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
          <Form.Item>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Department
            </label>
            <Select
              style={{ width: "100%", border: "none", height: 42 }} // Adjust width and border as needed
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
          <Form.Item>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload Image{" (Optional)"}
            </label>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload JPG/PNG only</Button>
            </Upload>
            {/* Image preview
            {fileList.length > 0 && (
              <img
                src={URL.createObjectURL(fileList[0]?.originFileObj)}
                alt="Preview"
                style={{ maxWidth: "30%", marginTop: 10 }}
              />
            )} */}
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
            )}
          </div>
        </Form>
      </Modal>
      )}
    </div>
  );
};

export default FacultyForm;
