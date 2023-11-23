import React, { useEffect, useState, ChangeEvent } from "react";
import { Modal, Input, InputNumber, Form, DatePicker, TimePicker } from "antd";
import moment, { Moment } from "moment";

interface RoomFormProps {
  modalVisible: boolean;
  handleSaveData: (name: string,  date: Moment | null, time: Moment | null) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomForm: React.FC<RoomFormProps> = ({
  modalVisible,
  handleSaveData,
  setModalVisible,
}) => {
  const [name, setname] = useState<string>("");
  const [capacity, setcapacity] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<Moment | null>(null);
  const [time, setTime] = useState<Moment | null>(null);

  useEffect(() => {
    if (!modalVisible) {
      setname("");
      setcapacity(undefined);
      setDate(null);
      setTime(null);
    }
  }, [modalVisible]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
    handleSaveData(name, date, time);
    setModalVisible(false);
  };

  const handlenameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value);
  };

  

  const handleDateChange = (date: Moment | null) => {
    setDate(date);
  };

  const handleTimeChange = (time: Moment | null) => {
    setTime(time);
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
        <Form.Item>
          <label className="block mb-2 text-sm font-medium text-gray-900">Room Name:</label>
          <Input
            className="input"
            placeholder="Enter the room name"
            value={name}
            onChange={handlenameChange}
          />
        </Form.Item>

        <Form.Item>
          <label className="block mb-2 text-sm font-medium text-gray-900">Date:</label>
          <DatePicker
            className="input"
            placeholder="Select Date"
            value={date}
            onChange={handleDateChange}
          />
        </Form.Item>

        <Form.Item>
          <label className="block mb-2 text-sm font-medium text-gray-900">Time:</label>
          <TimePicker
            className="input"
            placeholder="Select Time"
            value={time}
            onChange={handleTimeChange}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RoomForm;
