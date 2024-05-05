"use client";
import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const classDetails = [
  {
    department: "COMP",
    year: "FE",
    div: "A",
    strength: 88,
    practical_batch: 4,
    subject: [
      {
        name: "Mathematics II",
        code: "FE210",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Komal Paroolkar", shortName: "KP" },
      },
      {
        name: "Physics",
        code: "FE220",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Placida Periera", shortName: "PP" },
      },
      {
        name: "Computer Programming",
        code: "FE230",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Ramita Karpe", shortName: "RP" },
      },
      {
        name: "Introduction to Civil Engineering",
        code: "FE240",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Manasi Raut", shortName: "MR" },
      },
      {
        name: "Physics Lab",
        code: "FE250",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Placida Periera", shortName: "PP" },
      },
      {
        name: "Programming Lab",
        code: "FE260",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Engineering Graphics",
        code: "FE270",
        lecture: 1,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Marvin Fernandes", shortName: "MF" },
      },
      {
        name: "Workshop II",
        code: "FE280",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
    ],
  },
  {
    department: "COMP",
    year: "FE",
    div: "B",
    strength: 68,
    practical_batch: 3,
    subject: [
      {
        name: "Mathematics II",
        code: "FE210",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Komal Paroolkar", shortName: "KP" },
      },
      {
        name: "Physics",
        code: "FE220",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Placida Periera", shortName: "PP" },
      },
      {
        name: "Computer Programming",
        code: "FE230",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Ramita Karpe", shortName: "RP" },
      },
      {
        name: "Introduction to Civil Engineering",
        code: "FE240",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Manasi Raut", shortName: "MR" },
      },
      {
        name: "Physics Lab",
        code: "FE250",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Placida Periera", shortName: "PP" },
      },
      {
        name: "Programming Lab",
        code: "FE260",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Engineering Graphics",
        code: "FE270",
        lecture: 1,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Marvin Fernandes", shortName: "MF" },
      },
      {
        name: "Workshop II",
        code: "FE280",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
    ],
  },
  {
    department: "COMP",
    year: "SE",
    div: "A",
    strength: 88,
    practical_batch: 4,
    subject: [
      {
        name: "Discrete Mathematical Structures",
        code: "CE410",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Adarsh Handa", shortName: "AKH" },
      },
      {
        name: "Microprocessors & Microcontrollers",
        code: "CE420",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Gauri Barve", shortName: "GPB" },
      },
      {
        name: "Formal Language and Automata Theory",
        code: "CE430",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Cynara Silveira", shortName: "CMF" },
      },
      {
        name: "Modern Algorithm Design Foundation ",
        code: "CE440",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Cassandra Fernandes", shortName: "CCF" },
      },
      {
        name: "Object Oriented Software Engineering",
        code: "CE450",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Lance D'Melo", shortName: "LDM" },
      },
      {
        name: "Modern Algorithm Design Foundation Lab",
        code: "CE460",
        lecture: 0,
        tutorial: 0,
        practical: 4,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Microprocessors & Microcontrollers Lab",
        code: "CE470",
        lecture: 0,
        tutorial: 0,
        practical: 4,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Economics for Engineers",
        code: "HM100",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        Split: "NO",
        department: "COMP",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Marvin Fernandes", shortName: "MF" },
      },
    ],
  },
  {
    department: "COMP",
    year: "TE",
    div: "A",
    strength: 80,
    practical_batch: 4,
    subject: [
      {
        name: "Modern Computer Networking",
        code: "CE610",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "VijayKumar Pawar", shortName: "VP" },
      },
      {
        name: "Artificial Intelligence",
        code: "CE620",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Dr. Supriya Patil", shortName: "SP" },
      },
      {
        name: "Data Mining & Data Warehousing",
        code: "CE634",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Dr. Anusha Pai", shortName: "ARP" },
      },
      {
        name: "Cloud Computing & Applications ",
        code: "CE644",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Meghana Pai Kane ", shortName: "MPK" },
      },
      {
        name: "Data Science and Analytics ",
        code: "CEAM-03",
        lecture: 3,
        tutorial: 1,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "YES",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Ramita Karpe", shortName: "LRK" },
      },
      {
        name: "Computer Forensics and Cyber Security",
        code: "IT643",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "IT",
        Split: "NO",
        openElective: "YES",
        studentCount: 40,
        faculty: { name: "Ravina Rodrigues Quadros", shortName: "RNR" },
      },
      {
        name: "Computer Networks Lab ",
        code: "CE650",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Supply Chain Management",
        code: "ME644",
        lecture: 4,
        tutorial: 0,
        practical: 0,
        department: "ME",
        Split: "NO",
        openElective: "YES",
        studentCount: 40,
        faculty: { name: "Pundalik Salkar", shortName: "PS" },
      },
      {
        name: "Artificial Intelligence Lab",
        code: "CE660",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Technical Writing &   Professional Ethics",
        code: "HM200",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Nadia Fernandes", shortName: "NF" },
      },
    ],
  },
  {
    department: "COMP",
    year: "BE",
    div: "A",
    strength: 80,
    practical_batch: 4,
    subject: [
      {
        name: "Cryptography Techniques for Network Security",
        code: "CE810",
        lecture: 1,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Louella Colaco", shortName: "LMC" },
      },
      {
        name: "Pattern Recognition",
        code: "CE822",
        lecture: 1,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Gayaksha Kandolkar", shortName: "GK" },
      },
      {
        name: "Internet of things",
        code: "CE821",
        lecture: 1,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "VijayKumar Pawar", shortName: "VP" },
      },
      {
        name: "Project Work Phase II",
        code: "CE840",
        lecture: 0,
        tutorial: 0,
        practical: 10,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
    ],
  },
];

const labs = [
  {
    name: "MECHlab1",
    subject: "sub1",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab2",
    subject: "sub2",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab3",
    subject: "sub3",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab4",
    subject: "sub4",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab5",
    subject: "sub5",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "COMPlab1",
    subject: "sub1",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab2",
    subject: "sub2",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab3",
    subject: "sub3",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab4",
    subject: "sub4",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab5",
    subject: "sub5",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab1",
    subject: "sub1",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab2",
    subject: "sub2",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab3",
    subject: "sub3",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab4",
    subject: "sub4",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab5",
    subject: "sub5",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ITlab1",
    subject: "sub1",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab2",
    subject: "sub2",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab3",
    subject: "sub3",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab4",
    subject: "sub4",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab5",
    subject: "sub5",
    department: "IT",
    capacity: 25,
  },
  {
    name: "Physics Lab",
    subject: "Physics",
    department: "general",
    capacity: 10,
  },
  {
    name: "Chemistry Lab",
    subject: "Chemistry",
    department: "general",
    capacity: 10,
  },
];

const workshops = [
  {
    day: "MONDAY",
    startTime: "2:00PM",
    endTime: "5:00PM",
  },
  {
    day: "TUESDAY",
    startTime: "9:00AM",
    endTime: "1:15PM",
  },
  {
    day: "WEDNESDAY",
    startTime: "2:00PM",
    endTime: "5:00PM",
  },
  {
    day: "THURSDAY",
    startTime: "9:00AM",
    endTime: "1:15PM",
  },
  {
    day: "FRIDAY",
    startTime: "2:00PM",
    endTime: "5:00PM",
  },
];

const meeting = [
  {
    name: "HOD Meeting",
    day: "THURSDAY",
    time: "3:00PM",
  },
  {
    name: "Faculty Meeting",
    day: "FRIDAY",
    time: "1:00PM",
  },
];

const rooms = [
  {
    name: "L01",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L02",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L03",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L04",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L05",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L11",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L12",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L13",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L14",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L15",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L21",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L22",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L23",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L24",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L25",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L31",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L32",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L33",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L34",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L35",
    capacity: 90,
    department: "IT",
  },
];
const getTimeslots = (year) => {
  if (year === "FE" || year === "SE") {
    return [
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 1:00", // Lunch break
      "1:00 - 2:00",
      "2:00 - 3:00",
      "3:00 - 4:00",
      "4:00 - 5:00",
    ];
  } else if (year === "TE" || year === "BE") {
    return [
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 11:15", // Tea break
      "11:15 - 12:15",
      "12:15 - 1:15",
      "1:15 - 2:00", // Lunch break
      "2:00 - 3:00",
      "3:00 - 4:00",
      "4:00 - 5:00",
    ];
  }
};
// Define the genetic algorithm functions
const initializePopulation = (populationSize, classDetails) => {
  const population = [];
  for (let i = 0; i < populationSize; i++) {
    const timetable = [];
    for (const classDetail of classDetails) {
      const { department, year, div, strength, practical_batch, subject } =
        classDetail;
      const classTimetable = {
        department,
        year,
        div,
        strength,
        practical_batch,
        subject,
        timetable: generateRandomClassTimetable(
          classDetail,
          timetable,
          classDetails,
          daysOfWeek
        ),
      };
      timetable.push(classTimetable);
    }
    population.push(timetable);
  }
  return population;
};

const generateRandomClassTimetable = (
  classDetail,
  timetable,
  classDetails,
  daysOfWeek
) => {
  const { department, year, div, strength, practical_batch, subject } =
    classDetail;
  const classTimetable = [];

  // Keep track of instance counts for each subject and type
  const subjectInstanceCounts = subject.reduce((counts, subjectData) => {
    counts[subjectData.code] = {
      lecture: 0,
      tutorial: 0,
      practical: 0,
      lectureMax:
        subjectData.split === "YES"
          ? subjectData.lecture * 2
          : subjectData.lecture,
      tutorialMax: subjectData.tutorial * 2,
      practicalMax: subjectData.practical,
    };
    return counts;
  }, {});

  // Implement logic to generate a random timetable for the class
  const days = [0, 1, 2, 3, 4]; // Array of day indices
  for (const day of days) {
    // 5 days in a week (Monday to Friday)
    const dailySchedule = [];
    const timeslots = getTimeslots(year);
    for (let timeslot = 0; timeslot < timeslots.length; timeslot++) {
      const timeslotObj = {
        day: day + 1, // Assuming day index starts from 0
        timeslot: timeslots[timeslot],
      };

      // Check if there is a meeting scheduled for this timeslot
      const meetingOnThisTimeslot = meeting.some(
        (meetingData) =>
          meetingData.day.toUpperCase() === daysOfWeek[day].toUpperCase() &&
          meetingData.time === timeslots[timeslot]
      );

      // Check if this timeslot is a break
      const isBreak =
        ((year === "TE" || year === "BE") &&
          ((timeslot === 2 && timeslots[timeslot] === "11:00 - 11:15") ||
            (timeslot === 5 && timeslots[timeslot] === "1:15 - 2:00"))) ||
        ((year === "FE" || year === "SE") &&
          timeslot === 3 &&
          timeslots[timeslot] === "12:00 - 1:00");

      if (meetingOnThisTimeslot) {
        // If there is a meeting, add a meeting slot
        const slot = {
          room: null,
          subject: null,
          type: "meeting",
          meetingName: meeting.find(
            (meetingData) =>
              meetingData.day.toUpperCase() === daysOfWeek[day].toUpperCase() &&
              meetingData.time === timeslots[timeslot]
          ).name,
        };
        dailySchedule.push(slot);
      } else if (isBreak) {
        // If it's a break timeslot, add a break slot
        const slot = {
          room: null,
          subject: null,
          type: "break",
          startTime: timeslots[timeslot].split(" - ")[0],
          endTime: timeslots[timeslot].split(" - ")[1],
        };
        dailySchedule.push(slot);
      } else {
        const availableRooms = rooms.filter(
          (room) => room.department === department
        );
        let room = null;

        // Check if any rooms are already assigned for this timeslot
        const assignedRooms = classDetails
          ? classDetails.flatMap(
              (classDetail) =>
                classDetail.timetable?.[day]?.flatMap((slot) => slot.room) || []
            )
          : [];

        const availableRoomsForTimeslot = availableRooms.filter(
          (room) => !assignedRooms.includes(room)
        );

        if (availableRoomsForTimeslot.length > 0) {
          const roomIndex = Math.floor(
            Math.random() * availableRoomsForTimeslot.length
          );
          room = availableRoomsForTimeslot[roomIndex];
        }

        const subjectIndex = Math.floor(Math.random() * subject.length);
        const subjectData = subject[subjectIndex];

        let type;
        if (subjectData.name === "Project Work Phase II") {
          // Special case for Project Work Phase II
          type = "practical";
        } else {
          type =
            subjectInstanceCounts[subjectData.code].lecture <
            subjectInstanceCounts[subjectData.code].lectureMax
              ? "lecture"
              : subjectInstanceCounts[subjectData.code].tutorial <
                subjectInstanceCounts[subjectData.code].tutorialMax
              ? "tutorial"
              : subjectInstanceCounts[subjectData.code].practical <
                subjectInstanceCounts[subjectData.code].practicalMax
              ? "practical"
              : null;
        }

        const slot = {
          room,
          subject: type === null ? null : subjectData,
          type,
          instanceCount:
            type === null
              ? null
              : ++subjectInstanceCounts[subjectData.code][type], // Add instance count to the slot
          // Add other necessary information
        };

        dailySchedule.push(slot);
      }
    }
    classTimetable.push(dailySchedule);
  }

  return classTimetable;
};
const checkRoomDepartmentMatch = (timetable) => {
  for (const classTimeTable of timetable) {
    const { department, year, div, timetable } = classTimeTable;
    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        const { room, subject } = slot;
        let subjectDepartment;
        let roomDepartment;

        if (subject) {
          subjectDepartment = subject.department;
        } else {
          subjectDepartment = department;
        }

        if (room) {
          roomDepartment = room.department;
        } else {
          roomDepartment = department;
        }

        if (
          subjectDepartment !== roomDepartment &&
          roomDepartment !== department
        ) {
          return false;
        }

        if (subject && subject.practical > 0) {
          if (room) {
            if (room.department !== department) {
              return false;
            }
          } else {
            // If room is null, assume it belongs to the class department
            // and return false since practical subjects should be assigned to a lab
            return false;
          }
        }
      }
    }
  }
  return true;
};
const checkLabDepartmentMatch = (timetable) => {
  for (const classTimeTable of timetable) {
    const { department, timetable } = classTimeTable;

    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        const { subject } = slot;

        if (subject && subject.practical > 0) {
          if (slot.room) {
            if (slot.room.department !== department) {
              return false;
            }
          } else {
            // If slot.room is null, it means the practical subject is not assigned to a lab
            // which violates the constraint, so return false
            return false;
          }
        }
      }
    }
  }
  return true;
};

const checkLabCountMatch = (timetable) => {
  for (const classTimetable of timetable) {
    const { practical_batch, department } = classTimetable;
    const labCount = labs.filter((lab) => lab.department === department).length;

    if (labCount < practical_batch) {
      return false;
    }
  }
  return true;
};

const checkRoomAllocation = (timetable, classDetails) => {
  for (const classTimeTable of timetable) {
    const { department, year, div, timetable } = classTimeTable;
    const classDetail = classDetails.find(
      (detail) =>
        detail.department === department &&
        detail.year === year &&
        detail.div === div
    );

    if (classDetail && classDetail.subject) {
      for (const dailySchedule of timetable) {
        for (const slot of dailySchedule) {
          const { room, subject } = slot;
          let subjectDepartment;

          if (subject) {
            // Check if subject is not null before destructuring
            subjectDepartment = subject.department;
          } else {
            subjectDepartment = department; // Assume the class department if subject is null
          }

          if (subjectDepartment === department) {
            // Subject department matches the class department
            if (room && room.department !== department) {
              // Room department does not match class department
              return false;
            }
          } else {
            // Subject department is different from class department
            if (room && room.department !== subjectDepartment) {
              // Room department does not match subject department
              return false;
            }
          }

          if (
            subject &&
            subject.practical > 0 &&
            (!room || room.type !== "lab")
          ) {
            // Practical subject not assigned to a lab
            return false;
          }
        }
      }
    }
  }
  return true;
};
const checkLabAllocation = (timetable, classDetails) => {
  for (const classTimeTable of timetable) {
    const { department, practical_batch } = classTimeTable;
    const availableLabs = labs.filter((lab) => lab.department === department);

    if (availableLabs.length < practical_batch) {
      // Insufficient labs available for the class
      return false;
    }

    const labUsageCount = new Array(availableLabs.length).fill(0);

    for (const dailySchedule of classTimeTable.timetable) {
      for (const slot of dailySchedule) {
        const { subject, room } = slot;
        if (subject && subject.name.includes("Lab")) {
          // Add null check for subject
          let assignedLab = null;

          // Check for specific lab subjects
          if (subject.name === "Physics Lab") {
            assignedLab = labs.find(
              (lab) => lab.subject === "Physics" && lab.department === "general"
            );
          } else if (subject.name === "Chemistry Lab") {
            assignedLab = labs.find(
              (lab) =>
                lab.subject === "Chemistry" && lab.department === "general"
            );
          } else {
            // For other lab subjects
            const subjectDepartment = subject.department;
            const availableLabsForSubject = labs.filter(
              (lab) => lab.department === subjectDepartment
            );
            if (availableLabsForSubject.length > 0) {
              // Assign the first available lab
              assignedLab = availableLabsForSubject[0];
            }
          }

          if (assignedLab) {
            // Assign the specific lab
            slot.room = assignedLab;
          } else {
            // No available labs found for the subject, assign any available room
            const availableRoom = rooms.find(
              (room) =>
                !dailySchedule.some(
                  (otherSlot) => otherSlot.room.name === room.name
                )
            );
            if (availableRoom) {
              slot.room = availableRoom;
            } else {
              // No available rooms found
              return false;
            }
          }
        }
      }
    }

    if (labUsageCount.some((count) => count > 1)) {
      // A lab is assigned to multiple practical sessions simultaneously
      return false;
    }
  }
  return true;
};

const isRoomAvailable = (department, timeslot, timetable) => {
  let availableRooms = rooms.filter((room) => room.department === department);

  for (const classTimeTable of timetable) {
    const { timetable: classSchedule, subject } = classTimeTable;
    const dailySchedule = classSchedule[timeslot.day - 1]; // Assuming day index starts from 1

    for (const slot of dailySchedule) {
      if (slot.room) {
        // Add null check for slot.room
        const subjectDepartment = slot.subject
          ? slot.subject.department
          : department;
        const roomDepartment = slot.room.department;

        const roomIndex = availableRooms.findIndex(
          (room) => room.name === slot.room.name
        );

        if (roomIndex !== -1 && subjectDepartment === roomDepartment) {
          // Room is not available for the subject's department
          availableRooms.splice(roomIndex, 1);
        }
      }
    }

    // Check if there are enough available rooms for subjects with high practical counts
    const highPracticalSubjects = subject.filter(
      (subjectData) => subjectData.practical > 4
    );
    for (const subjectData of highPracticalSubjects) {
      const requiredRoomCount = subjectData.practical;
      const availableRoomCount = availableRooms.length;

      if (availableRoomCount < requiredRoomCount) {
        return false;
      }
    }
  }

  return availableRooms.length > 0;
};
const checkSubjectDistribution = (timetable, classDetails) => {
  for (const classTimeTable of timetable) {
    const { department, year, div, timetable } = classTimeTable;
    const classDetail = classDetails.find(
      (detail) =>
        detail.department === department &&
        detail.year === year &&
        detail.div === div
    );

    if (classDetail && classDetail.subject) {
      for (const subjectData of classDetail.subject) {
        const { lecture, tutorial, practical, split, code } = subjectData;
        let lectureCount = 0;
        let tutorialCount = 0;
        let practicalCount = 0;

        for (const dailySchedule of timetable) {
          for (const slot of dailySchedule) {
            if (slot.subject && slot.subject.code === code) {
              // Add null check for slot.subject
              if (slot.type === "lecture") {
                lectureCount++;
              } else if (slot.type === "tutorial") {
                tutorialCount++;
              } else if (slot.type === "practical") {
                practicalCount++;
              }
            }
          }
        }

        const expectedLectureCount = split === "YES" ? lecture * 2 : lecture;
        const expectedTutorialCount = tutorial * 2;
        const expectedPracticalCount = practical;

        if (
          lectureCount !== expectedLectureCount ||
          tutorialCount !== expectedTutorialCount ||
          practicalCount !== expectedPracticalCount
        ) {
          return false;
        }
        // Check subject distribution throughout the week
        const dayCounters = new Array(5).fill(0);
        for (const dailySchedule of timetable) {
          for (const slot of dailySchedule) {
            if (slot.subject && slot.subject.code === code) {
              // Add null check for slot.subject
              dayCounters[dailySchedule.dayIndex]++;
            }
          }
        }

        const minDayCount = Math.min(...dayCounters);
        const maxDayCount = Math.max(...dayCounters);

        if (maxDayCount - minDayCount > 1) {
          // Subject not evenly distributed throughout the week
          return false;
        }

        // Check for paired lectures for subjects with split = "YES"
        if (split === "YES") {
          for (const dailySchedule of timetable) {
            const pairedLectures = dailySchedule.filter(
              (slot) =>
                slot.subject &&
                slot.subject.split === "YES" &&
                slot.type === "lecture" // Add null check for slot.subject
            );

            if (pairedLectures.length % 2 !== 0) {
              // Odd number of paired lectures found
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};

const checkBreakTimings = (timetable) => {
  for (const classTimeTable of timetable) {
    const { year, timetable } = classTimeTable;

    for (const dailySchedule of timetable) {
      const timeslots = getTimeslots(year);

      // Check for break slots
      const breakSlots = dailySchedule.filter((slot) => slot.type === "break");

      for (const breakSlot of breakSlots) {
        const breakStartIndex = timeslots.findIndex(
          (slot) => slot === breakSlot.startTime
        );
        const breakEndIndex = timeslots.findIndex(
          (slot) => slot === breakSlot.endTime
        );

        // Check if any subject is assigned during the break timings
        for (let i = breakStartIndex; i < breakEndIndex; i++) {
          const slotDuringBreak = dailySchedule.find(
            (slot) =>
              slot.timeslot === timeslots[i] &&
              slot.subject !== null &&
              slot.type !== "break"
          );
          if (slotDuringBreak) {
            return false;
          }
        }
      }
    }
  }
  return true;
};
const areConsecutiveSlots = (slot1, slot2) => {
  const slot1StartTime = new Date(`2000-01-01T${slot1.startTime}`);
  const slot1EndTime = new Date(`2000-01-01T${slot1.endTime}`);
  const slot2StartTime = new Date(`2000-01-01T${slot2.startTime}`);

  return slot1EndTime.getTime() === slot2StartTime.getTime();
};

const checkInstructorRest = (timetable) => {
  const instructorTimetables = {};

  for (const classTimeTable of timetable) {
    const { timetable } = classTimeTable;
    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        if (slot.subject) {
          // Add null check for slot.subject
          const { faculty } = slot.subject;
          const { name } = faculty;

          if (!instructorTimetables[name]) {
            instructorTimetables[name] = [];
          }

          instructorTimetables[name].push(slot);
        }
      }
    }
  }

  for (const instructorName in instructorTimetables) {
    const instructorSlots = instructorTimetables[instructorName];
    let consecutiveHours = 0;

    for (let i = 0; i < instructorSlots.length; i++) {
      const currentSlot = instructorSlots[i];
      const nextSlot = instructorSlots[i + 1];

      if (nextSlot && areConsecutiveSlots(currentSlot, nextSlot)) {
        consecutiveHours++;
      } else {
        if (consecutiveHours >= 2) {
          return false;
        }
        consecutiveHours = 0;
      }
    }
  }

  return true;
};

const checkInstructorLoadBalance = (timetable) => {
  const instructorLoadCounts = {};

  for (const classTimeTable of timetable) {
    const { timetable } = classTimeTable;
    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        if (slot.subject) {
          // Check if slot.subject is not undefined
          const { faculty } = slot.subject;
          const { name } = faculty;

          if (!instructorLoadCounts[name]) {
            instructorLoadCounts[name] = 0;
          }

          instructorLoadCounts[name]++;
        }
      }
    }
  }

  const loadValues = Object.values(instructorLoadCounts);
  const maxLoad = Math.max(...loadValues);
  const minLoad = Math.min(...loadValues);

  const loadDifference = maxLoad - minLoad;

  // Adjust the threshold based on your requirements
  const threshold = 5;

  if (loadDifference > threshold) {
    return false;
  }

  return true;
};
const checkRoomAvailability = (timetable) => {
  for (const classTimeTable of timetable) {
    const { department, timetable: classSchedule } = classTimeTable;

    for (const [dayIndex, dailySchedule] of classSchedule.entries()) {
      for (const slot of dailySchedule) {
        const { room, subject } = slot;
        const timeslot = {
          day: dayIndex + 1, // Assuming day index starts from 0
          // Add other necessary information about the timeslot
        };

        const subjectDepartment = subject
          ? subject.department || department
          : department;
        if (!isRoomAvailable(subjectDepartment, timeslot, timetable)) {
          return false;
        }
      }
    }
  }

  return true;
};
const generateFacultyTimetables = (bestTimetable) => {
  const facultyTimetables = {};

  bestTimetable.forEach((classTimeTable) => {
    const { timetable, subject, year } = classTimeTable;
    const timeslots = getTimeslots(year);

    timetable.forEach((dailySchedule, dayIndex) => {
      dailySchedule.forEach((slot, slotIndex) => {
        if (slot.subject || slot.type === "meeting") {
          const { name } = slot.subject ? slot.subject.faculty : {};
          const { code, name: subjectName } = slot.subject || {};
          const { year, div, department } = classTimeTable;
          const timeslot = timeslots[slotIndex];

          if (!facultyTimetables[name]) {
            facultyTimetables[name] = [];
          }

          const existingSlot = facultyTimetables[name].find(
            (s) =>
              s.day === dayIndex + 1 &&
              s.timeslot === timeslot &&
              s.subject !== "Meeting"
          );

          if (existingSlot) {
            // If a slot already exists for this day and timeslot, update the existing slot
            existingSlot.subject = `${code} - ${subjectName}`;
            existingSlot.class = `${year} ${department} ${div}`;
            existingSlot.room = slot.room ? slot.room.name : "N/A";
          } else {
            // Otherwise, add a new slot
            facultyTimetables[name].push({
              day: dayIndex + 1,
              timeslot,
              subject:
                slot.type === "meeting"
                  ? "Meeting"
                  : `${code} - ${subjectName}`,
              class:
                slot.type === "meeting"
                  ? slot.meetingName
                  : `${year} ${department} ${div}`,
              room: slot.room ? slot.room.name : "N/A",
            });
          }
        }
      });
    });
  });

  return facultyTimetables;
};
const evaluateFitness = (timetable) => {
  let fitnessScore = 0;
  const constraints = {
    roomDepartmentMatch: checkRoomDepartmentMatch(timetable),
    labDepartmentMatch: checkLabDepartmentMatch(timetable),
    labCountMatch: checkLabCountMatch(timetable),
    subjectDistribution: checkSubjectDistribution(timetable, classDetails),
    breakTimings: checkBreakTimings(timetable),
    instructorRest: checkInstructorRest(timetable),
    instructorLoadBalance: checkInstructorLoadBalance(timetable),
    roomAllocation: checkRoomAllocation(timetable, classDetails),
    labAllocation: checkLabAllocation(timetable, classDetails),
    roomAvailability: checkRoomAvailability(timetable), // Add this new constraint
  };

  for (const constraint in constraints) {
    if (constraints[constraint]) {
      if (constraint === "roomAllocation") {
        fitnessScore += 2; // Give a higher weight to the room allocation constraint
      } else {
        fitnessScore++;
      }
    }
  }

  return fitnessScore;
};

// Other genetic algorithm functions (selection, crossover, mutation, replacement, termination condition)

// Functional component for Next.js 13
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const Timetable = () => {
  const [population, setPopulation] = useState([]);
  const [bestTimetable, setBestTimetable] = useState([]);
  const [facultyTimetables, setFacultyTimetables] = useState({});
  const [showClassTimetables, setShowClassTimetables] = useState(true);
  const [shouldRegenerate, setShouldRegenerate] = useState(false); // New state variable

  const timetablesByDepartmentAndYear = bestTimetable.reduce(
    (acc, timetableForClass) => {
      const { year, department } = timetableForClass;
      if (!acc[department]) {
        acc[department] = {};
      }
      if (!acc[department][year]) {
        acc[department][year] = [];
      }
      acc[department][year].push(timetableForClass);
      return acc;
    },
    {}
  );
  useEffect(() => {
    const populationSize = 100; // Set the desired population size
    const maxGenerations = 1000; // Set the maximum number of generations

    const runGeneticAlgorithm = () => {
      let currentPopulation = initializePopulation(
        populationSize,
        classDetails
      );
      setPopulation(currentPopulation);

      let currentGeneration = 0;
      while (currentGeneration < maxGenerations) {
        // Implement the genetic algorithm loop
        // (selection, crossover, mutation, replacement, fitness evaluation)

        currentGeneration++;
      }

      // Find the best timetable from the final population
      const bestIndividual = currentPopulation.reduce((prev, curr) => {
        return evaluateFitness(prev) > evaluateFitness(curr) ? prev : curr;
      });
      setBestTimetable(bestIndividual);

      // Generate faculty timetables
      const facultyTimetablesData = generateFacultyTimetables(bestIndividual);
      setFacultyTimetables(facultyTimetablesData);
    };

    runGeneticAlgorithm();
  }, [shouldRegenerate]); // Add shouldRegenerate to the dependency array

  const handleRegenerate = () => {
    setShouldRegenerate(!shouldRegenerate); // Toggle the shouldRegenerate state
  };

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const getPracticalBatches = (practical_batch) => {
    if (!practical_batch || practical_batch === 0) {
      return [];
    }
    const batches = [];
    for (let i = 1; i <= practical_batch; i++) {
      batches.push(`P${i}`);
    }
    return batches;
  };
  const handleTimetableToggle = (type) => {
    setShowClassTimetables(type === "class");
  };

  return (
    <div>
      <nav className="flex justify-center mb-4 gap-3">
        <button
          className="px-4 py-2 rounded bg-green-500 text-white"
          onClick={handleRegenerate}
        >
          Regenerate
        </button>
        <button
          className={`px-4 py-2 rounded ${
            showClassTimetables ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTimetableToggle("class")}
        >
          Class Timetables
        </button>
        <button
          className={`px-4 py-2 rounded ${
            !showClassTimetables ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTimetableToggle("faculty")}
        >
          Faculty Timetables
        </button>
      </nav>
      {showClassTimetables
        ? Object.entries(timetablesByDepartmentAndYear).map(
            ([department, timetablesByYear], departmentIndex) => (
              <div key={departmentIndex}>
                <ReactHTMLTableToExcel
                  id={`test-table-xls-button-${departmentIndex}`}
                  className="download-table-xls-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  table={`table-to-xls-${departmentIndex}`}
                  filename={`${department}-timetable`}
                  sheet={department}
                  buttonText={`Download ${department} Timetable`}
                />
                <table id={`table-to-xls-${departmentIndex}`}>
                  {Object.entries(timetablesByYear).map(
                    ([year, timetablesForYear], yearIndex) => (
                      <div key={`${departmentIndex}-${yearIndex}`}>
                        <h2 className="mt-5 mb-5">Department: {department}</h2>
                        {timetablesForYear.map(
                          (timetableForClass, classIndex) => (
                            <div
                              key={`${departmentIndex}-${yearIndex}-${classIndex}`}
                              className="p-3"
                            >
                              <h3 className="mt-5 mb-5">
                                Department: {department}, Year: {year},
                                Division: {timetableForClass.div}, Practical
                                Batch: {timetableForClass.practical_batch}
                              </h3>
                              <table className="table-auto w-full text-center border-2">
                                <thead>
                                  <tr>
                                    <th></th>
                                    {getTimeslots(timetableForClass.year).map(
                                      (slot, index) => (
                                        <th
                                          key={index}
                                          className="bg-slate-300"
                                        >
                                          {slot}
                                        </th>
                                      )
                                    )}
                                  </tr>
                                </thead>
                                <tbody className="border-2">
                                  {timetableForClass.timetable.map(
                                    (dailySchedule, dayIndex) => (
                                      <tr key={dayIndex}>
                                        <td className="border-2 bg-slate-300">
                                          {daysOfWeek[dayIndex]}
                                        </td>
                                        {dailySchedule.map(
                                          (slot, timeslotIndex) => (
                                            <td
                                              className={`border-2 min-w-[6rem] min-h-[4rem] max-w-[10rem] h-16 ${
                                                slot.type === "break"
                                                  ? "bg-gray-200"
                                                  : ""
                                              }`}
                                              key={timeslotIndex}
                                            >
                                              {slot.type === "break"
                                                ? `Break (${slot.startTime} - ${slot.endTime})`
                                                : slot.type === "empty"
                                                ? ""
                                                : slot.type && slot.subject
                                                ? `${slot.subject.name} ${
                                                    slot.subject.faculty
                                                      ? slot.subject.faculty
                                                          .shortName
                                                      : ""
                                                  } ${
                                                    slot.type === "lecture"
                                                      ? `(L${slot.instanceCount})`
                                                      : slot.type === "tutorial"
                                                      ? `(T${slot.instanceCount})`
                                                      : slot.type ===
                                                        "practical"
                                                      ? ""
                                                      : ""
                                                  } (${
                                                    slot.room
                                                      ? slot.room.name
                                                      : ""
                                                  })`
                                                : ""}
                                            </td>
                                          )
                                        )}
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                              <div className="flex gap-5 object-contain">
                                <table className="table-auto mt-4 border-2">
                                  <thead>
                                    <tr>
                                      <th className="bg-slate-300">Subjects</th>
                                      <th className="bg-slate-300">Faculty</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {timetableForClass.subject.map(
                                      (subject, index) => (
                                        <tr key={index}>
                                          <td className="border-2">
                                            {subject.code} : {subject.name}
                                          </td>
                                          <td className="border-2">
                                            {subject.faculty.shortName} -{" "}
                                            {subject.faculty.name}
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                                <table className="table-auto mt-4 border-2">
                                  <thead>
                                    <tr>
                                      <th colSpan={2} className="bg-slate-300">
                                        Practical Batches
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {getPracticalBatches(
                                      timetableForClass.practical_batch
                                    ).map((batch, index) => (
                                      <tr key={index}>
                                        <td className="border-2 min-w-24">
                                          {batch}
                                        </td>
                                        <td className="border-2 min-w-24"></td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )
                  )}
                </table>
              </div>
            )
          )
        : bestTimetable.length > 0 && (
            <div className="p-3">
              <ReactHTMLTableToExcel
                id={`faculty-table-xls-button`}
                className="download-table-xls-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                table={`faculty-table-to-xls`}
                filename={`faculty-timetable`}
                sheet={`Faculty Timetable`}
                buttonText={`Download Faculty Timetable`}
              />
              <table id={`faculty-table-to-xls`}>
                {Object.entries(facultyTimetables).map(
                  ([facultyName, facultyTimetable], index) => (
                    <React.Fragment key={index}>
                      <h2 className="mt-5 mb-5">{facultyName}</h2>
                      <table className="w-full text-center border-2">
                        <thead>
                          <tr>
                            <th></th>
                            {getTimeslots("TE").map((slot, index) => (
                              <th key={index} className="bg-slate-300">
                                {slot}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="border-2">
                          {daysOfWeek.map((day, dayIndex) => (
                            <tr key={dayIndex}>
                              <td className="border-2 bg-slate-300">{day}</td>
                              {getTimeslots("TE").map(
                                (timeslot, timeslotIndex) => (
                                  <td
                                    className="border-2 min-w-[6rem] min-h-[4rem] max-w-[10rem] h-16"
                                    key={timeslotIndex}
                                  >
                                    {facultyTimetable.find(
                                      (slot) =>
                                        slot.day === dayIndex + 1 &&
                                        slot.timeslot === timeslot &&
                                        slot.subject === "Meeting"
                                    ) ? (
                                      <div>
                                        {
                                          facultyTimetable.find(
                                            (slot) =>
                                              slot.day === dayIndex + 1 &&
                                              slot.timeslot === timeslot &&
                                              slot.subject === "Meeting"
                                          ).class
                                        }{" "}
                                        ({timeslot})
                                      </div>
                                    ) : (
                                      facultyTimetable
                                        .filter(
                                          (slot) =>
                                            slot.day === dayIndex + 1 &&
                                            slot.timeslot === timeslot &&
                                            slot.subject !== "Meeting"
                                        )
                                        .map((slot, slotIndex) => (
                                          <div key={slotIndex}>
                                            {slot.subject} ({slot.class}) (
                                            {slot.room})
                                            <br />
                                          </div>
                                        ))
                                    )}
                                  </td>
                                )
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </React.Fragment>
                  )
                )}
              </table>
            </div>
          )}
    </div>
  );
};

export default Timetable;
