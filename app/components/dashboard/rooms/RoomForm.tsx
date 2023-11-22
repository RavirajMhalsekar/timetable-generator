"use client";
import React, { useState } from "react";
import { Button, Modal ,Input,Select,Form} from "antd"; 
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values: any) => {
    console.log(values);
  };

function RoomsForm() { 
    const [form] = Form.useForm();

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
      {/* <Button type="default" onClick={showModal}>
        Open Modal
      </Button> */}
      <button
        type="button"
        onClick={showModal}
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Purple to Pink
      </button>
      <Modal
       
        title="Enter Room Data "
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label htmlFor="room_name" className="block mb-2 text-sm font-medium text-gray-900 ">
          Name Of Room
        </label>
        <input
          type="text"
          id="room_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="L28"
          required
        />
      </div>
      
      
      <div>
        <label htmlFor="capacity" className="block mb-2 text-sm font-medium text-gray-900 ">
          Capacity Of Room
        </label>
        <input
          type="number"
          id="capacity"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="0"
          required
        />
      </div>
    </div>

      </Modal>
    </div>
  );
}

export default RoomsForm;
