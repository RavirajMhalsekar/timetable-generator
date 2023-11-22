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
       
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
          <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="note"
        label="Note"
        rules={[{ required: true }]}
        style={{ marginBottom: 0 }}
      >
        <Input />
      </Form.Item>
    </Form>



      </Modal>
    </div>
  );
}

export default RoomsForm;
