import React from 'react';
import Table from '../Table';

const MeetingTable: React.FC = () => {
  const columns = ['Srno', 'Meeting Name', 'Day','Time'];
  const data = [
    ['Srno', 'HOD', 'Monday','13:24:54'],
    ['2', 'HOD', 'Monday','13:24:54'],
    ['3', 'HOD', 'Monday','13:24:54'],
    ['4', 'HOD', 'Monday','13:24:54'],
    ['5', 'HOD', 'Monday','13:24:54'],
    ['6', 'HWD', 'Monday','13:24:54'],
    ['7', 'HOD', 'Monday','13:24:54'],
    ['8', 'HOD', 'Monday','13:24:54'],
    ['9', 'HOD', 'Monday','13:24:54'],
    ['10', 'HOD', 'Monday','13:24:54'],
   
    
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default MeetingTable;
