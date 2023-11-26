import React from 'react';
import Table from '../Table';

const RoomTable: React.FC = () => {
  const columns = ['Srno', 'Name', 'Capacity'];
  const data = [
    ['1', 'L01', '80'],
    ['2', 'L02', '90'],
    ['3', 'L03', '85'],
    ['4', 'L04', '80'],
    ['5', 'L05', '90'],
    ['6', 'L11', '80'],
    ['7', 'L12', '90'],
    ['8', 'L13', '85'],
    ['9', 'L14', '80'],
    ['10', 'L15', '90'],
    ['11', 'L21', '80'],
    ['12', 'L22', '90'],
    ['13', 'L23', '85'],
    ['14', 'L24', '80'],
    ['15', 'L25', '90'],
    
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default RoomTable;
