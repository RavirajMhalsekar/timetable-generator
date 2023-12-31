"use client";
import React, { useState } from "react";
import { Modal, Input, Form, TimePicker, DatePicker, notification } from "antd";
import dayjs, { Dayjs } from "dayjs";
import SubmitMeetingData from "../../Database/SubmitMeetingData";
import { LoadingOutlined } from "@ant-design/icons";

const MeetingForm = () => {
  const [meetingName, setMeetingName] = useState("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<Dayjs | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    meetingName: false,
    date: false,
    time: false,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleTimeChange = (time: Dayjs | null) => {
    setTime(time);
  };

  const resetForm = () => {
    setMeetingName("");
    setDate("");
    setTime(null);
    setTouchedFields({
      meetingName: false,
      date: false,
      time: false,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const emptyFields = {
      meetingName: !meetingName.trim(),
      date: date === "",
      time: time === null,
    };

    const anyEmptyField = Object.values(emptyFields).some((field) => field);

    if (anyEmptyField) {
      notification.error({
        message: "Please fill in all required fields.",
        placement: "topRight",
        duration: 3,
      });

      setTouchedFields({
        meetingName: emptyFields.meetingName,
        date: emptyFields.date,
        time: emptyFields.time,
      });

      setIsLoading(false);
      return;
    }

    const formData = {
      meetingName,
      date,
      time,
    };

    try {
      await SubmitMeetingData(formData);
      setTimeout(() => {
        notification.success({
          message: "Form data submitted successfully!",
          placement: "topRight",
          duration: 3,
        });

        resetForm();
        setIsModalOpen(false);
        setIsLoading(false);
      }, 1000); // Simulating a delay before showing the success notification
    } catch (error) {
      notification.error({
        message: "Error submitting form data!",
        placement: "topRight",
        duration: 3,
      });
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
      {isModalOpen && ( // Conditionally render the Modal
        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              validateStatus={
                touchedFields.meetingName && !meetingName.trim() ? "error" : ""
              }
              help={
                touchedFields.meetingName && !meetingName.trim()
                  ? "Please enter a meeting name"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Meeting Name
              </label>
              <Input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter the room name"
                value={meetingName}
                onChange={(event) => setMeetingName(event.target.value)}
              />
            </Form.Item>

            <Form.Item
              validateStatus={touchedFields.date && !date ? "error" : ""}
              help={touchedFields.date && !date ? "Please select a date" : ""}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Date
              </label>
              <DatePicker
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Select Date"
                value={date ? dayjs(date) : null} // Convert the 'date' to Dayjs format if it exists
                onChange={(selectedDate, dateString) => setDate(dateString)}
              />
            </Form.Item>

            <Form.Item
              validateStatus={
                touchedFields.time && time === null ? "error" : ""
              }
              help={
                touchedFields.time && time === null
                  ? "Please select a time"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Time
              </label>
              <TimePicker
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Select Time"
                value={time}
                format="h:mm A" // Use 12-hour format with AM/PM
                use12Hours // Enable 12-hour mode
                onChange={(newTime) => handleTimeChange(newTime)}
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

export default MeetingForm;
