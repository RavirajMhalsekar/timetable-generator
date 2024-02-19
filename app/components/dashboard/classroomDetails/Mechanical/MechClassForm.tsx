"use client";
import React, { useEffect, useState } from "react";
import { Select, Button } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Client, Databases } from "appwrite";

interface Option {
  label: string;
  value: string;
  department: string;
  desc: string;
  semester: string;
}
interface SubjectSelection {
  selectedSubjects: string[];
}
const MechClassForm: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [firstYearSelections, setFirstYearSelections] = useState<
    SubjectSelection[]
  >([{ selectedSubjects: [] }]);
  const [secondYearSelections, setSecondYearSelections] = useState<
    SubjectSelection[]
  >([{ selectedSubjects: [] }]);
  const [thirdYearSelections, setThirdYearSelections] = useState<
    SubjectSelection[]
  >([{ selectedSubjects: [] }]);
  const [fourthYearSelections, setFourthYearSelections] = useState<
    SubjectSelection[]
  >([{ selectedSubjects: [] }]);

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65af81642532e75bf90e");

    const databases = new Databases(client);

    databases
      .listDocuments("65b12ffa18f8493c948e", "65b20fa542e20ae06aa4")
      .then((response) => {
        const newOptions = response.documents.map((doc) => ({
          label: doc.code,
          value: doc.$id,
          department: doc.department,
          desc: doc.name,
          semester: doc.semester.toString(),
        }));
        setOptions(newOptions);
      })
      .catch((error) => {
        console.error("Failed to fetch documents:", error);
      });
  }, []);

  const handleSubjectChange = (
    value: string[],
    index: number,
    year: string
  ) => {
    switch (year) {
      case "firstYear":
        setFirstYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].selectedSubjects = value;
          return newState;
        });
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].selectedSubjects = value;
          return newState;
        });
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].selectedSubjects = value;
          return newState;
        });
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].selectedSubjects = value;
          return newState;
        });
        break;
      default:
        break;
    }
  };

  const addSubjectSelection = (year: string) => {
    switch (year) {
      case "firstYear":
        setFirstYearSelections((prevState) => [
          ...prevState,
          { selectedSubjects: [] },
        ]);
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => [
          ...prevState,
          { selectedSubjects: [] },
        ]);
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => [
          ...prevState,
          { selectedSubjects: [] },
        ]);
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => [
          ...prevState,
          { selectedSubjects: [] },
        ]);
        break;
      default:
        break;
    }
  };

  const removeSubjectSelection = (sectionType: string, index: number) => {
    switch (sectionType) {
      case "firstYear":
        const newFirstYearSelections = [...firstYearSelections];
        newFirstYearSelections.splice(index, 1);
        setFirstYearSelections(newFirstYearSelections);
        break;
      case "secondYear":
        const newSecondYearSelections = [...secondYearSelections];
        newSecondYearSelections.splice(index, 1);
        setSecondYearSelections(newSecondYearSelections);
        break;
      case "thirdYear":
        const newThirdYearSelections = [...thirdYearSelections];
        newThirdYearSelections.splice(index, 1);
        setThirdYearSelections(newThirdYearSelections);
        break;
      case "fourthYear":
        const newFourthYearSelections = [...fourthYearSelections];
        newFourthYearSelections.splice(index, 1);
        setFourthYearSelections(newFourthYearSelections);
        break;
      default:
        break;
    }
  };

  // Function to generate division labels
  const getDivisionLabel = (index: number) =>
    `DIV ${String.fromCharCode(65 + index)}`;

  return (
    <div>
      <form>
        <div className="flex items-center mb-3 mt-2">
          <span>First Year</span>
          <hr className="flex-grow border-gray-300 ml-4  " />
        </div>
        {firstYearSelections.map((selection, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  marginRight: "20px",
                  marginTop: "22px",
                  color: "#718096",
                }}
              >
                {getDivisionLabel(index)}
              </div>
              <div className="grid gap-6 mb-1 md:grid-cols-3 flex-grow">
                <div>
                  <label
                    htmlFor={`first_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Strength
                  </label>
                  <input
                    type="text"
                    id={`first_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the strength..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`last_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. of practical batches
                  </label>
                  <input
                    type="number"
                    id={`last_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the practical batches..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`subjects_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select the Subjects
                  </label>
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 border-none"
                    placeholder="Select the subjects..."
                    onChange={(value) => handleSubjectChange(value, index)}
                    options={options}
                    optionRender={(option) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <span>{option.data.label}</span>
                          <span>{option.data.department}</span>
                        </div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {option.data.desc}
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
              {index !== 0 && (
                <MinusCircleOutlined
                  onClick={() => removeSubjectSelection("firstYear", index)}
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </React.Fragment>
        ))}
        <div className="flex justify-center">
          <button
            onClick={() => addSubjectSelection("firstYear")}
            className="bg-gray-200 border-dashed border border-gray-400 w-3/4 text-gray-500 rounded-lg"
          >
            + Add field
          </button>
        </div>
        <div className="flex items-center mb-3 mt-2">
          <span>Second Year</span>
          <hr className="flex-grow border-gray-300 ml-4  " />
        </div>
        {secondYearSelections.map((selection, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  marginRight: "20px",
                  marginTop: "22px",
                  color: "#718096",
                }}
              >
                {getDivisionLabel(index)}
              </div>
              <div className="grid gap-6 mb-1 md:grid-cols-3 flex-grow">
                <div>
                  <label
                    htmlFor={`first_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Strength
                  </label>
                  <input
                    type="text"
                    id={`first_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the strength..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`last_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. of practical batches
                  </label>
                  <input
                    type="number"
                    id={`last_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the practical batches..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`subjects_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select the Subjects
                  </label>
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 border-none"
                    placeholder="Select the subjects..."
                    onChange={(value) => handleSubjectChange(value, index)}
                    options={options}
                    optionRender={(option) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <span>{option.data.label}</span>
                          <span>{option.data.department}</span>
                        </div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {option.data.desc}
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
              {index !== 0 && (
                <MinusCircleOutlined
                  onClick={() => removeSubjectSelection("secondYear", index)}
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </React.Fragment>
        ))}
        <div className="flex justify-center">
          <button
            onClick={() => addSubjectSelection("secondYear")}
            className="bg-gray-200 border-dashed border border-gray-400 w-3/4 text-gray-500 rounded-lg"
          >
            + Add field
          </button>
        </div>
        <div className="flex items-center mb-3 mt-2">
          <span>Third Year</span>
          <hr className="flex-grow border-gray-300 ml-4  " />
        </div>
        {thirdYearSelections.map((selection, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  marginRight: "20px",
                  marginTop: "22px",
                  color: "#718096",
                }}
              >
                {getDivisionLabel(index)}
              </div>
              <div className="grid gap-6 mb-1 md:grid-cols-3 flex-grow">
                <div>
                  <label
                    htmlFor={`first_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Strength
                  </label>
                  <input
                    type="text"
                    id={`first_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the strength..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`last_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. of practical batches
                  </label>
                  <input
                    type="number"
                    id={`last_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the practical batches..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`subjects_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select the Subjects
                  </label>
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 border-none"
                    placeholder="Select the subjects..."
                    onChange={(value) => handleSubjectChange(value, index)}
                    options={options}
                    optionRender={(option) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <span>{option.data.label}</span>
                          <span>{option.data.department}</span>
                        </div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {option.data.desc}
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
              {index !== 0 && (
                <MinusCircleOutlined
                  onClick={() => removeSubjectSelection("thirdYear", index)}
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </React.Fragment>
        ))}
        <div className="flex justify-center">
          <button
            onClick={() => addSubjectSelection("thirdYear")}
            className="bg-gray-200 border-dashed border border-gray-400 w-3/4 text-gray-500 rounded-lg"
          >
            + Add field
          </button>
        </div>
        <div className="flex items-center mb-3 mt-2">
          <span>Fourth Year</span>
          <hr className="flex-grow border-gray-300 ml-4  " />
        </div>
        {fourthYearSelections.map((selection, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  marginRight: "20px",
                  marginTop: "22px",
                  color: "#718096",
                }}
              >
                {getDivisionLabel(index)}
              </div>
              <div className="grid gap-6 mb-1 md:grid-cols-3 flex-grow">
                <div>
                  <label
                    htmlFor={`first_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Strength
                  </label>
                  <input
                    type="text"
                    id={`first_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the strength..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`last_name_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No. of practical batches
                  </label>
                  <input
                    type="number"
                    id={`last_name_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the practical batches..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`subjects_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select the Subjects
                  </label>
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 border-none"
                    placeholder="Select the subjects..."
                    onChange={(value) => handleSubjectChange(value, index)}
                    options={options}
                    optionRender={(option) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <span>{option.data.label}</span>
                          <span>{option.data.department}</span>
                        </div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {option.data.desc}
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
              {index !== 0 && (
                <MinusCircleOutlined
                  onClick={() => removeSubjectSelection("fourthYear", index)}
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </React.Fragment>
        ))}
        <div className="flex justify-center">
          <button
            onClick={() => addSubjectSelection("fourthYear")}
            className="bg-gray-200 border-dashed border border-gray-400 w-3/4 text-gray-500 rounded-lg"
          >
            + Add field
          </button>
        </div>
      </form>
    </div>
  );
};

export default MechClassForm;


