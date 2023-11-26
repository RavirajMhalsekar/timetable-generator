"use client";
import React, { useState } from "react";
import { Button, Modal, Select } from "antd";
function SubjectForm() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      
      <Button className="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l" type="default" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        // title="Add Subject Form"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="grid gap-6 mt-2 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Subject Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="eg. Cloud Computing"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Subject Code
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="eg. CE710"
              required
            />
          </div>
          <div className="grid gap-3 mb-2 md:grid-cols-3">
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Lecture
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                pattern="[0-9]{3}"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Tutorial
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                pattern="[0-9]{3}"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Practical
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                pattern="[0-9]{3}"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Hours
            </label>
            <input
              type="number"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Enter the hours..."
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Semester
            </label>
            <input
              type="number"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Offered in which sem?"
              required
            />
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Department
            </label>
            <Select
              placeholder="Select Department"
              style={{ width: "100%", border: "none", height: 42 }} // Adjust width and border as needed
              onChange={handleChange}
            >
              <Select.Option value="Mech">Mech</Select.Option>
              <Select.Option value="ETC">ETC</Select.Option>
              <Select.Option value="ECOMP">ECOMP</Select.Option>
              <Select.Option value="COMP">COMP</Select.Option>
              <Select.Option value="IT">IT</Select.Option>
            </Select>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Split
            </label>
            <Select
              placeholder="Require split?"
              style={{ width: "100%", border: "none", height: 42 }} // Adjust width and border as needed
              onChange={handleChange}
              options={[
                { value: "NO", label: "NO" },
                { value: "YES", label: "YES" },
              ]}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Faculty
            </label>
            <input
              type="text"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Name of the faculty..."
              required
            />
          </div>
        </div>
        <button
          type="button"
          className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Create
        </button>
      </Modal>
    </div>
  );
}

export default SubjectForm;
