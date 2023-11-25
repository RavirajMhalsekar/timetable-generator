import React, { useState } from "react";
import { List, Button, Card, Pagination } from "antd";

interface Data {
  facultyName: string;
  facultyDescription: string;
  facultyImage: string; // Assuming facultyImage is a URL to the image
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
    <div className="dictionarys-list ">
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Card 
              title={item.facultyName}
              extra={<Button onClick={() => onDelete(index)} type="danger">Delete</Button>}
            >
              <img alt="faculty" src={item.facultyImage} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <p style={customStyle}>{item.facultyDescription}</p>
            </Card>
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
