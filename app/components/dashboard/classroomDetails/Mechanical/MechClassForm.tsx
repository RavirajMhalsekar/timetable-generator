"use client";
import React, { useEffect, useState } from "react";
import { Select, Button } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Client, Databases, Query } from "appwrite";

interface Option {
  label: string;
  value: string;
  department: string;
  desc: string;
  semester: string;
  lecture: string | number;
  practical: string | number;
  tutorial: string | number;
  split: string;
}

interface SubjectSelection {
  selectedSubjects: string[];
  facultyAssignment: {
    [subject: string]: {id:string; name: string; shortName: string; department: string };
  };
  studentCount: { [subject: string]: number };
  isOpenElective: { [subject: string]: string };
}

interface FacultyOption {
  label: string;
  value: string;
  department: string;
  designation: string;
  shortName: string;
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
 const [practicalBatches, setPracticalBatches] = useState<{
   [year: string]: { [divIndex: number]: number | null };
 }>({
   firstYear: {},
   secondYear: {},
   thirdYear: {},
   fourthYear: {},
 });

 const [strengths, setStrengths] = useState<{
   [year: string]: { [divIndex: number]: number | null };
 }>({
   firstYear: {},
   secondYear: {},
   thirdYear: {},
   fourthYear: {},
 });

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65cca38ecf87da7b211a");

    const databases = new Databases(client);

    // Fetch subjects
    databases
      .listDocuments("65cca3b35db95a90e8c4", "65cca44746b071c7d98a", [
        Query.limit(300),
      ])
      .then((response) => {
        const newOptions = response.documents.map((doc) => ({
          value: doc.$id,
          desc: doc.name,
          label: doc.code,
          lecture: doc.lecture,
          practical: doc.practical,
          tutorial: doc.tutorial,
          semester: doc.semester.toString(),
          department: doc.department,
          split: doc.split,
        }));
        setOptions(newOptions);
      })
      .catch((error) => {
        console.error("Failed to fetch documents:", error);
      });

    // Fetch faculty
    databases
      .listDocuments("65cca3b35db95a90e8c4", "65cca3db4edc1e2a17bf", [
        Query.limit(300),
      ]) // Replace with the appropriate collection ID
      .then((response) => {
        const newFacultyOptions = response.documents.map((doc) => ({
          label: doc.name,
          department: doc.department,
          designation: doc.designation,
          shortName: doc.shortName,
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
    year: "firstYear" | "secondYear" | "thirdYear" | "fourthYear"
  ) => {
    const facultyOption = facultyOptions.find(
      (option) => option.value === facultyId
    );
    switch (year) {
      case "firstYear":
        setFirstYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = {
            id: facultyOption?.value || "",
            name: facultyOption?.label || "",
            shortName: facultyOption?.shortName || "",
            department: facultyOption?.department || "",
          };
          return newState;
        });
        break;
      case "secondYear":
        setSecondYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = {
            id: facultyOption?.value || "",
            name: facultyOption?.label || "",
            shortName: facultyOption?.shortName || "",
            department: facultyOption?.department || "",
          };
          return newState;
        });
        break;
      case "thirdYear":
        setThirdYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = {
            id: facultyOption?.value || "",
            name: facultyOption?.label || "",
            shortName: facultyOption?.shortName || "",
            department: facultyOption?.department || "",
          };
          return newState;
        });
        break;
      case "fourthYear":
        setFourthYearSelections((prevState) => {
          const newState = [...prevState];
          newState[index].facultyAssignment[subject] = {
            id: facultyOption?.value || "",
            name: facultyOption?.label || "",
            shortName: facultyOption?.shortName || "",
            department: facultyOption?.department || "",
          };
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
    year: "firstYear" | "secondYear" | "thirdYear" | "fourthYear"
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

  const addSubjectSelection = (
    year: "firstYear" | "secondYear" | "thirdYear" | "fourthYear",
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault(); // Prevent the default behavior (page reload)

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

  const removeSubjectSelection = (
    sectionType: "firstYear" | "secondYear" | "thirdYear" | "fourthYear",
    index: number
  ) => {
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
    year: "firstYear" | "secondYear" | "thirdYear" | "fourthYear"
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

  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    const classDetails: {
      department: string;
      year: string;
      div: string;
      strength: number | null;
      practical_batch: number | null;
      subject: {
        name: string;
        code: string;
        lecture: number | null;
        tutorial: number | null;
        practical: number | null;
        department: string;
        Split: string;
        openElective: string;
        studentCount: number | null;
        faculty: { name: string; shortName: string; department: string };
      }[];
    }[] = [];

    const getDepartment = (year: string) => {
      if (year.includes("FE")) {
        return "MECH";
      } else if (year.includes("SE")) {
        return "COMP";
      } else if (year.includes("TE")) {
        return "ECOMP";
      } else if (year.includes("BE")) {
        return "IT";
      }
      return "";
    };
    
    const processYearData = (yearData: SubjectSelection[], year: string) => {
      const department = getDepartment(year);
      yearData.forEach((selection, index) => {
        const classData: {
          department: string;
          year: string;
          div: string;
          strength: number | null;
          practical_batch: number | null;
          subject: {
            name: string;
            code: string;
            lecture: number | null;
            tutorial: number | null;
            practical: number | null;
            department: string;
            Split: string;
            openElective: string;
            studentCount: number | null;
            faculty: {
              name: string;
              shortName: string;
              department: string;
            };
          }[];
        } = {
          department,
          year,
          div: String.fromCharCode(65 + index),
          strength: strengths[year]?.[index] || null,
          practical_batch: practicalBatches[year]?.[index] || null,
          subject: selection.selectedSubjects.map((subjectId) => {
            const subjectOption = options.find(
              (opt) => opt.value === subjectId
            );
            return {
              name: subjectOption?.desc || "",
              code: subjectOption?.label || "",
              lecture:
                typeof subjectOption?.lecture === "number"
                  ? subjectOption?.lecture
                  : null,
              tutorial:
                typeof subjectOption?.tutorial === "number"
                  ? subjectOption?.tutorial
                  : null,
              practical:
                typeof subjectOption?.practical === "number"
                  ? subjectOption?.practical
                  : null,
              department: subjectOption?.department || "",
              Split: subjectOption?.split || "",
              openElective: selection.isOpenElective[subjectId] || "NO",
              studentCount: selection.studentCount[subjectId] || null,
              faculty: selection.facultyAssignment[subjectId] || {
                name: "",
                shortName: "",
                department: "",
              },
            };
          }),
        };
        classDetails.push(classData);
      });
    };

    processYearData(firstYearSelections, "FE");
    processYearData(secondYearSelections, "SE");
    processYearData(thirdYearSelections, "TE");
    processYearData(fourthYearSelections, "BE");

    console.log(classDetails);
    alert("Data sent successfully!");
  };
  const handlePracticalBatchChange = (
  value: number | null,
  year: string,
  index: number
) => {
  setPracticalBatches((prevState) => ({
    ...prevState,
    [year]: {
      ...prevState[year],
      [index]: value,
    },
  }));
};

const handleStrengthChange = (
  value: number | null,
  year: string,
  index: number
) => {
  setStrengths((prevState) => ({
    ...prevState,
    [year]: {
      ...prevState[year],
      [index]: value,
    },
  }));
};
  return (
    <div>
      <form>
        <div className="flex items-center mb-3 mt-2">
          <span>First Year</span>
          <hr className="flex-grow border-gray-300 ml-4" />
        </div>
        {firstYearSelections.map((selection, index) => (
          <React.Fragment key={index}>
            {index !== 0 ? <hr className="my-4" /> : null}
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
                <p className="flex flex-wrap">{getDivisionLabel(index)}</p>
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
                    type="number"
                    id={`strength_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the strength..."
                    value={strengths[`firstYear`]?.[index] ?? ""} // Change here
                    onChange={(e) =>
                      handleStrengthChange(
                        e.target.value ? Number(e.target.value) : null,
                        "firstYear",
                        index
                      )
                    }
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
                    id={`practical_batch_${index}`}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter the practical batches..."
                    value={practicalBatches[`firstYear`]?.[index] ?? ""} // Change here
                    onChange={(e) =>
                      handlePracticalBatchChange(
                        e.target.value ? Number(e.target.value) : null,
                        "firstYear",
                        index
                      )
                    }
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
                          <span>
                            {option.data.label} (Sem {option.data.semester})
                          </span>
                          {/* <span>SEM {option.data.semester}</span> */}
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
                      optionRender={(option) => (
                        <div className="flex flex-col w-full">
                          <span>{option.data.label}</span>
                          {option.data.department && (
                            <span className="text-gray-500 text-sm">
                              {option.data.department}
                            </span>
                          )}
                          {option.data.designation && (
                            <span className="text-gray-500 text-sm">
                              {option.data.designation}
                            </span>
                          )}
                        </div>
                      )}
                      onChange={(value) =>
                        handleFacultyAssignment(
                          subject,
                          value,
                          index,
                          "firstYear"
                        )
                      }
                      value={
                        selection.facultyAssignment[subject]
                          ? `${selection.facultyAssignment[subject].name} (${selection.facultyAssignment[subject].department})`
                          : ""
                      }
                      popupMatchSelectWidth={false}
                      dropdownStyle={{ width: "300px" }}
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
            onClick={(event) => addSubjectSelection("firstYear", event)}
            className="bg-gray-200 border-dashed border border-gray-400 w-3/4 text-gray-500 rounded-lg"
          >
            + Add more division
          </button>
        </div>

        {/* Repeat the above code for other years */}
        {/* ... */}
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MechClassForm;
