"use client"
import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import Table from "../Table";
const SubjectList: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);
  const columns = [
    "SrNo",
    "Name",
    "Code",
    "Lec",
    "Tut",
    "Prac",
    "hours",
    "Sem",
    "Dept",
    "Split",
    // "Faculty",
  ];
  const pollingInterval = 5000; // Poll every 5 seconds

  useEffect(() => {
    const client = new Client();
     client
       .setEndpoint("https://cloud.appwrite.io/v1")
       .setProject("65cca38ecf87da7b211a");

    const databases = new Databases(client);

    const fetchData = () => {
      databases
        .listDocuments("65cca3b35db95a90e8c4", "65cca44746b071c7d98a")
        .then((response) => {
          console.log(response.documents);
          const mappedData = response.documents.map((doc, index) => [
            index + 1,
            doc.name,
            doc.code,
            doc.lecture,
            doc.tutorial,
            doc.practical,
            doc.hours,
            doc.semester,
            doc.department,
            doc.split,
            // doc.faculty,
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


