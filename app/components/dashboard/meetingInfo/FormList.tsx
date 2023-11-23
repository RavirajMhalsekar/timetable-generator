import React, { useState } from "react";
import { List, Button, Pagination } from "antd";
import moment, { Moment } from "moment";

interface Data {
  name: string;
  date: Moment ;
  time: Moment ;
}

interface FormListProps {
  data: Data[];
  onDelete: (index: number) => void;
}

const customStyle: React.CSSProperties = {
  fontSize: "1.1em",
  fontWeight: "bold",
};

const FormList: React.FC<FormListProps> = ({ data, onDelete }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const handlePageChange = (page: number, pageSize: number | undefined) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  return (
    <div className="dictionarys-list">
      <List
        header={<h3>The Room Data</h3>}
        bordered
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className="flex items-center">
            <div className="mr-4">
              <h3 style={customStyle}>name</h3>
              {item.name}
            </div>
            <div className="mr-4">
              <h3 style={customStyle}>Date</h3>
              {item.date ? moment(item.date).format("YYYY-MM-DD") : "N/A"}
            </div>
            <div className="mr-4">
              <h3 style={customStyle}>Time</h3>
              {item.time ? moment(item.time).format("HH:mm:ss") : "N/A"}
            </div>
            <Button onClick={() => onDelete(index)} type="danger">
              Delete
            </Button>
          </List.Item>
        )}
        pagination={
          data.length > pageSize
            ? {
                current: currentPage,
                pageSize: pageSize,
                total: data.length,
                onChange: handlePageChange,
              }
            : false
        }
      />
    </div>
  );
};

export default FormList;
