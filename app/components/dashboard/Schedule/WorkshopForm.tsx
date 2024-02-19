"use client";
import React, { useState } from "react";
import { Modal, Form, TimePicker, notification, Select } from "antd";
import { Dayjs } from "dayjs";
import SubmitWorkshopData from "../../Database/SubmitWorkshopData";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

const WorkshopForm: React.FC = () => {
  const [day, setDay] = useState<string>("");
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({
    meetingName: false,
    date: false,
    time: false,
  });
  const daysOfWeek: string[] = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleStartTimeChange = (startTime: Dayjs | null) => {
    setStartTime(startTime);
  };
  const handleEndTimeChange = (endTime: Dayjs | null) => {
    setEndTime(endTime);
  };

  const resetForm = () => {
    setDay("");
    setStartTime(null);
    setEndTime(null);
    setTouchedFields({
      date: false,
      startTime: false,
      endTime: false,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const emptyFields = {
      date: day === "",
      startTime: startTime === null,
      endTime: endTime === null,
    };

    const anyEmptyField = Object.values(emptyFields).some((field) => field);

    if (anyEmptyField) {
      notification.error({
        message: "Please fill in all required fields.",
        placement: "topRight",
        duration: 3,
      });

      setTouchedFields({
        date: emptyFields.date,
        startTime: emptyFields.startTime,
        endTime: emptyFields.endTime,
      });

      setIsLoading(false);
      return;
    }

    // Format hour into 12-hour format and add AM or PM after the minutes
    const formattedStartTime = startTime?.format("hh:mmA") ?? "";
    const formattedEndTime = endTime?.format("hh:mmA") ?? "";

    const formData = {
      day,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    };
    console.log(formData);

    try {
      await SubmitWorkshopData(formData);
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
            Add Meeting
          </span>
        </button>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              validateStatus={touchedFields.date && !day ? "error" : ""}
              help={touchedFields.date && !day ? "Please select a day" : ""}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Day of the Week
              </label>
              <Select
                style={{ width: "100%", border: "none", height: 42 }}
                placeholder="Select a day"
                value={day}
                onChange={(value) => setDay(value)}
              >
                {daysOfWeek.map((day) => (
                  <Option key={day} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              validateStatus={
                touchedFields.startTime && startTime === null ? "error" : ""
              }
              help={
                touchedFields.startTime && startTime === null
                  ? "Please select a time"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Start Time
              </label>
              <TimePicker
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Select Time"
                value={startTime}
                format="hh:mm A"
                use12Hours
                onChange={(newTime) => handleStartTimeChange(newTime)}
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                touchedFields.endTime && endTime === null ? "error" : ""
              }
              help={
                touchedFields.endTime && endTime === null
                  ? "Please select a time"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                End Time
              </label>
              <TimePicker
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Select Time"
                value={endTime}
                format="hh:mm A"
                use12Hours
                onChange={(newTime) => handleEndTimeChange(newTime)}
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

export default WorkshopForm;
