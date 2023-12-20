import Table from "../Table";

function FacultyList() {
  const columns = ["Srno", "facultyName", "designation", "department"];
  const data = [
    ["1", "Dr. Anusha Pai", "Professor - Head of Department", "Computer"],
    ["2", "Lance De'Mello", "Associate Professor", "Information Technology"],
    ["3", "Meghna Pai Kane", "Assistant Professor", "Computer"],
    ["4", "Dr. Anusha Pai", "Assistant Professor (On Contract)", "Computer"],
    ["5", "Lance De'Mello", "Associate Professor", "Information Technology"],
    ["6", "Meghna Pai Kane", "Assistant Professor", "Computer"],
    
  ];
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default FacultyList;
