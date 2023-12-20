import Table from "../Table";
function SubjectList() {
  const columns = [
    "Name",
    "Code",
    "Lec",
    "Tut",
    "Prac",
    "Sem",
    "Dept",
    "Split",
    "Faculty",
  ];
  const data = [
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    ["DBMS", "CE1211", "6","3","10","5","Computer","NO","Guari Barne"],
    
  ];
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SubjectList;
