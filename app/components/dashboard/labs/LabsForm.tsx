import React, { useEffect, useState, ChangeEvent } from "react";
import { Modal, Input, InputNumber,Form } from "antd";

interface RoomFormProps {
  modalVisible: boolean;
  handleSaveLabData: ( labName: string, subName:String,
department:String, capacity: number | undefined) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomForm: React.FC<RoomFormProps> = ({
  modalVisible,
  handleSaveLabData,
  setModalVisible,
}) => {
  const [labName, setlabName] = useState<string>("");
  const [subName, setsubName] = useState<string>("");
  const [department, setdepartment] = useState<string>("");
  const [labcapacity, setlabcapacity] = useState<number | undefined >(undefined);

  useEffect(() => {
    if (!modalVisible) {
        setlabName("");
        setsubName("");
        setdepartment("");
        setlabcapacity(undefined);
    }
  }, [modalVisible]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
    handleSaveLabData(labName,subName,department,labcapacity);
    setModalVisible(false);
  };

  const handlelabNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setlabName(e.target.value);
  };
  const handlesubNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsubName(e.target.value);
  };
  const handledepartmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdepartment(e.target.value);
  };

  const handlecapacityChange = (value: number ) => {
    setlabcapacity(value);
  };

  return (
    <Modal
      className="input"
      title="Enter Data For Rooms !!!!!!"
      visible={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    > 
     <Form>
          {/* Add a label for the room name */}
          <Form.Item >
          <label className="block mb-2 text-sm font-medium text-gray-900">Lab Name:</label>
            <Input
              className="input"
              placeholder="Enter name of lab"
              value={labName}
              onChange={handlelabNameChange}
            />
          </Form.Item>
          <Form.Item >
          <label className="block mb-2 text-sm font-medium text-gray-900">Subject Name:</label>
            <Input
              className="input"
              placeholder="Enter name of subject"
              value={subName}
              onChange={handlesubNameChange}
            />
          </Form.Item>
          <Form.Item >
          <label className="block mb-2 text-sm font-medium text-gray-900">Department:</label>
            <Input
              className="input"
              placeholder="Enter name of Department"
              value={department}
              onChange={handledepartmentChange}
            />
          </Form.Item>
       
      
             <Form.Item >
             <label className="block mb-2 text-sm font-medium text-gray-900">Lab Capacity:</label>
      <InputNumber
        className="input"
        placeholder="Enter capacity Of the room"
        value={labcapacity}
        onChange={handlecapacityChange}
      /> 
                </Form.Item>
       </Form>
    </Modal>
  );
};

export default RoomForm;
