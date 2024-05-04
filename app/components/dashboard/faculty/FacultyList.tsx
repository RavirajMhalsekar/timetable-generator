"use client"
import { useEffect, useState } from 'react';
import { Client, Databases, Query } from "appwrite";
import Table from "../Table";

function FacultyList() {
  const [data, setData] = useState<string[][]>([]);
  const columns = ["Srno", "facultyName", "designation", "department"];
  const pollingInterval = 5000; // Poll every 5 seconds

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65cca38ecf87da7b211a");

    const databases = new Databases(client);

    const fetchData = () => {
      databases
        .listDocuments("65cca3b35db95a90e8c4", "65cca3db4edc1e2a17bf", [
          Query.limit(100),
        ])
        .then((response) => {
          const mappedData = response.documents.map((doc, index) => [
            index + 1,
            doc.name,
            doc.designation,
            doc.department,
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
};

export default FacultyList;


