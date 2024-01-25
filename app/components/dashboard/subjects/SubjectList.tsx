"use client"
import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import Table from "../Table";
const SubjectList: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);
  const columns = [
    "Name",
    "Code",
    "Lec",
    "Tut",
    "Prac",
    "hours",
    "Sem",
    "Dept",
    "Split",
    "Faculty",
  ];
  const pollingInterval = 5000; // Poll every 5 seconds

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65af81642532e75bf90e');

    const databases = new Databases(client);

    const fetchData = () => {
      databases.listDocuments("65b12ffa18f8493c948e", "65b20fa542e20ae06aa4")
        .then((response) => {
          const mappedData = response.documents.map((doc, index) => [
            (index + 1),
            doc.name,
            doc.code,
            doc.lecture,
            doc.tutorial,
            doc.practical,
            doc.hours,
            doc.semester,
            doc.department,
            doc.split,
            doc.faculty,
          ]);
          setData(mappedData);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, pollingInterval); // Set up polling

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SubjectList;


