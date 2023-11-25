import React, { useEffect, useState, ChangeEvent } from "react";
import { Modal, Input, InputNumber,Form } from "antd";

interface RoomFormProps {
  modalVisible: boolean;
 handleSaveRoomData: (name: string, capacity: number | undefined) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompClassroomDetailsForm: React.FC<RoomFormProps> = ({
  modalVisible,
 handleSaveRoomData,
  setModalVisible,
}) => {
  const [name, setname] = useState<string>("");
  const [capacity, setcapacity] = useState<number | undefined>( undefined);

  useEffect(() => {
    if (!modalVisible) {
      setname("");
      setcapacity(undefined);
    }
  }, [modalVisible]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
   handleSaveRoomData(name, capacity);
    setModalVisible(false);
  };

  const handlenameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value);
  };

  const handlecapacityChange = (value: number ) => {
    setcapacity(value);
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
          <label className="block mb-2 text-sm font-medium text-gray-900">Room Name:</label>
            <Input
              className="input"
              placeholder="Enter the room name"
              value={name}
              onChange={handlenameChange}
            />
          </Form.Item>
       
      
             <Form.Item >
             <label className="block mb-2 text-sm font-medium text-gray-900">Room Capacity:</label>
      <InputNumber
        className="input"
        placeholder="Enter capacity Of the room"
        value={capacity}
        onChange={handlecapacityChange}
      /> 
                </Form.Item>
       </Form>
    </Modal>
  );
};

export default CompClassroomDetailsForm;
