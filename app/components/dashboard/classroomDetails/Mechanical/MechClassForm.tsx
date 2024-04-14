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
  facultyAssignment: { [subject: string]: string };
  studentCount: { [subject: string]: number };
  isOpenElective: { [subject: string]: string };
}

interface FacultyOption {
  label: string;
  value: string;
}

const MechClassForm: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [facultyOptions, setFacultyOptions] = useState<FacultyOption[]>([]);
  const [firstYearSelections, setFirstYearSelections] = useState<
    SubjectSelection[]
  >([
    {
      selectedSubjects: [],
      facultyAssignment: {},
      studentCount: {},
      isOpenElective: {},
    },
  ]);
  const [secondYearSelections, setSecondYearSelections] = useState<
    SubjectSelection[]
  >([
    {
      selectedSubjects: [],
      facultyAssignment: {},
      studentCount: {},
      isOpenElective: {},
    },
  ]);
  const [thirdYearSelections, setThirdYearSelections] = useState<
    SubjectSelection[]
  >([
    {
      selectedSubjects: [],
      facultyAssignment: {},
      studentCount: {},
      isOpenElective: {},
    },
  ]);
  const [fourthYearSelections, setFourthYearSelections] = useState<
    SubjectSelection[]
  >([
    {
      selectedSubjects: [],
      facultyAssignment: {},
      studentCount: {},
      isOpenElective: {},
    },
  ]);

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65cca38ecf87da7b211a");

    const databases = new Databases(client);

    // Fetch subjects
    databases
      .listDocuments("65cca3b35db95a90e8c4", "65cca44746b071c7d98a")
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

    // Fetch faculty
    databases
      .listDocuments("65b12ffa18f8493c948e", "65b20fa542e20ae06aa5") // Replace with the appropriate collection ID
      .then((response) => {
        const newFacultyOptions = response.documents.map((doc) => ({
          label: `${doc.firstName} ${doc.lastName}`, // Assuming firstName and lastName fields exist
          value: doc.$id,
        }));
        setFacultyOptions(newFacultyOptions);
      })
      .catch((error) => {
        console.error("Failed to fetch faculty documents:", error);
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

  const handleFacultyAssignment = (
    subject: string,
    facultyId: string,
    index: number,
    year: string
  ) => {
    switch (year) {
      case "firstYear":
        setFirstYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = facultyId;
          return newState;
        });
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = facultyId;
          return newState;
        });
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = facultyId;
          return newState;
        });
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = facultyId;
          return newState;
        });
        break;
      default:
        break;
    }
  };

  const handleStudentCount = (
    subject: string,
    count: number,
    index: number,
    year: string
  ) => {
    switch (year) {
      case "firstYear":
        setFirstYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].studentCount[subject] = count;
          return newState;
        });
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].studentCount[subject] = count;
          return newState;
        });
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].studentCount[subject] = count;
          return newState;
        });
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].studentCount[subject] = count;
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
          {
            selectedSubjects: [],
            facultyAssignment: {},
            studentCount: {},
            isOpenElective: {},
          },
        ]);
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => [
          ...prevState,
          {
            selectedSubjects: [],
            facultyAssignment: {},
            studentCount: {},
            isOpenElective: {},
          },
        ]);
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => [
          ...prevState,
          {
            selectedSubjects: [],
            facultyAssignment: {},
            studentCount: {},
            isOpenElective: {},
          },
        ]);
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => [
          ...prevState,
          {
            selectedSubjects: [],
            facultyAssignment: {},
            studentCount: {},
            isOpenElective: {},
          },
        ]);
        break;
      default:
        break;
    }
  };

  const removeSubjectSelection = (sectionType: string, index: number) => {
    switch (sectionType) {
      case "firstYear":
        setFirstYearSelections((prevState) => {
          const newState = [...prevState];
          newState.splice(index, 1);
          return newState;
        });
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => {
          const newState = [...prevState];
          newState.splice(index, 1);
          return newState;
        });
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => {
          const newState = [...prevState];
          newState.splice(index, 1);
          return newState;
        });
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => {
          const newState = [...prevState];
          newState.splice(index, 1);
          return newState;
        });
        break;
      default:
        break;
    }
  };
  const handleIsOpenElective = (
    subject: string,
    isOpenElective: string,
    index: number,
    year: string
  ) => {
    switch (year) {
      case "firstYear":
        setFirstYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].isOpenElective[subject] = isOpenElective;
          return newState;
        });
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].isOpenElective[subject] = isOpenElective;
          return newState;
        });
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].isOpenElective[subject] = isOpenElective;
          return newState;
        });
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].isOpenElective[subject] = isOpenElective;
          return newState;
        });
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
          <hr className="flex-grow border-gray-300 ml-4" />
        </div>
        {firstYearSelections.map((selection, index) => (
          <React.Fragment key={index}>
            {index != 0 ? <hr className="my-4" /> : null}
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
                <p className="flex flex-wrap"> {getDivisionLabel(index)} </p>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-11 border-none"
                    placeholder="Select the subjects..."
                    onChange={(value) =>
                      handleSubjectChange(value, index, "firstYear")
                    }
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
            <div className=" grid grid-cols-2 gap-5 rounded justify-center">
              {selection.selectedSubjects.map((subject, subjectIndex) => (
                <div
                  key={subjectIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <span className="mt-5 mr-2">
                    {options.find((opt) => opt.value === subject)?.label}
                  </span>
                  <div>
                    <label
                      htmlFor={`faculty_${index}_${subjectIndex}`}
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Assign Faculty
                    </label>
                    <Select
                      id={`faculty_${index}_${subjectIndex}`}
                      style={{ width: "120px" }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 border-none"
                      options={facultyOptions}
                      onChange={(value) =>
                        handleFacultyAssignment(
                          subject,
                          value as string,
                          index,
                          "firstYear"
                        )
                      }
                      value={selection.facultyAssignment[subject]}
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <label
                      htmlFor={`student_count_${index}_${subjectIndex}`}
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Student Count
                    </label>
                    <input
                      type="number"
                      id={`student_count_${index}_${subjectIndex}`}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-2.5"
                      value={selection.studentCount[subject] || ""}
                      onChange={(e) =>
                        handleStudentCount(
                          subject,
                          Number(e.target.value),
                          index,
                          "firstYear"
                        )
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <label
                      htmlFor={`is_open_elective_${index}_${subjectIndex}`}
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Open Elective?
                    </label>
                    <Select
                      style={{ width: "120px" }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-10 border-none"
                      id={`is_open_elective_${index}_${subjectIndex}`}
                      value={selection.isOpenElective[subject] || "No"}
                      onChange={(value) =>
                        handleIsOpenElective(subject, value, index, "firstYear")
                      }
                      options={[
                        { value: "Yes", label: "Yes" },
                        { value: "No", label: "No" },
                      ]}
                    />
                  </div>
                </div>
              ))}
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

        {/* Repeat the above code for other years */}
        {/* ... */}
      </form>
    </div>
  );
};

export default MechClassForm;
