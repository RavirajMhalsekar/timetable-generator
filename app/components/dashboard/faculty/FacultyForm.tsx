import React, { useEffect, useState, ChangeEvent } from "react";
import { Modal, Input, InputNumber, Button, message ,Form,Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile ,UploadChangeParam} from "antd/lib/upload/interface";
interface RoomFormProps {
  modalVisible: boolean;
 handleSaveFacultyData: (facultyName: string, faculyDescription: string , facultyImage:RcFile ) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomForm: React.FC<RoomFormProps> = ({
  modalVisible,
 handleSaveFacultyData,
  setModalVisible,
}) => {
  const [facultyName, setfacultyName] = useState<string>("");
  const [faculyDescription, setfaculyDescription] = useState<string>("");
  const [fileList, setFileList] = useState<RcFile[]>([]);

  useEffect(() => {
    if (!modalVisible) {
      setfacultyName("");
      setfaculyDescription("");
      setFileList([]);
    }
  }, [modalVisible]);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
   handleSaveFacultyData(facultyName, faculyDescription,fileList);
    setModalVisible(false);
  };
  const handleaFacultyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setfacultyName(e.target.value);
  };
  const handleaFacultyDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setfaculyDescription(e.target.value);
  };
  const handleImageUpload = (info: UploadChangeParam) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFacultyImage(info.file.response.url); // Assuming the server returns the image URL in the response
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadProps = {
    action: "https://your-upload-endpoint", // Replace with your actual upload endpoint
    onChange: handleImageUpload,
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
              value={facultyName}
              onChange={handleaFacultyNameChange}
            />
          </Form.Item> 
          <Form.Item >
          <label className="block mb-2 text-sm font-medium text-gray-900">Room Name:</label>
            <Input
              className="input"
              placeholder="Enter the room name"
              value={faculyDescription}
              onChange={handleaFacultyDescriptionChange}
            />
          </Form.Item>
       
      
             <Form.Item >
             <label className="block mb-2 text-sm font-medium text-gray-900">Upload Image:</label>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
                </Form.Item>
       </Form>
    </Modal>
  );
};

export default RoomForm;
