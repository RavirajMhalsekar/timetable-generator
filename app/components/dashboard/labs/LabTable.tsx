import React from 'react';
import Table from '../Table';

const LabTable: React.FC = () => {
  const columns = ['Srno', 'Lab Name','Subject Name','Department', 'Lab Capacity'];
  const data = [
    ['1', 'L01','Operating system','Computer', '15'],
    ['2', 'L02','Java','Information Technology', '90'],
    ['3', 'L03','Operating system','Computer', '35'],
    ['4', 'L04','Java','Information Technology', '80'],
    ['5', 'L05','Operating system','Computer', '90'],
    ['6', 'L11','Java','Information Technology', '80'],
    ['7', 'L12','Operating system','Computer', '90'],
    ['8', 'L13','Java','Information Technology', '85'],
    ['9', 'L14','Operating system','Computer', '80'],
    ['10', 'L15','Java','Information Technology', '90'],
    ['11', 'L21','Operating system','Computer', '80'],
    ['12', 'L22','Java','Information Technology', '90'],
    ['13', 'L23','Operating system','Computer', '85'],
    ['14', 'L24','Java','Information Technology', '80'],
    ['15', 'L25','Operating system','Computer', '90'],
    
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default LabTable;
