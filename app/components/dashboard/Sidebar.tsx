"use client"
import { useState } from "react";
import Link from "next/link";

function Sidebar() {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("/components/dashboard/rooms");

  // Function to update the active link
  const handleSetActiveLink = (link:string) => {
    setActiveLink(link);
  };

  // Function to determine if a link is active
  const isActive = (link:string) => activeLink === link;

  return (
    <div className="sticky top-0 h-full w-3/12 bg-white rounded-2xl p-3 shadow-lg overflow-y-auto">
      <div className="text-center space-x-4 p-2">Dashboard</div>
      <hr className="w-full" />
      <ul className="space-y-2 text-sm mt-2">
        {/* Rooms Link */}
        <li>
          <Link href="/components/dashboard/rooms">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/rooms")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() => handleSetActiveLink("/components/dashboard/rooms")}
            >
              <span className="text-gray-600 ">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span>Rooms</span>
            </p>
          </Link>
        </li>

        {/* Labs Link */}
        <li>
          <Link href="/components/dashboard/labs">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/labs")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() => handleSetActiveLink("/components/dashboard/labs")}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span>Labs</span>
            </p>
          </Link>
        </li>

        {/* Faculty Link */}
        <li>
          <Link href="/components/dashboard/faculty">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/faculty")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() =>
                handleSetActiveLink("/components/dashboard/faculty")
              }
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <span>Faculty</span>
            </p>
          </Link>
        </li>

        {/* Subject Details Link */}
        <li>
          <Link href="/components/dashboard/subjects">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/subjects")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() =>
                handleSetActiveLink("/components/dashboard/subjects")
              }
            >
              <span className=" text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              <span>Subject Details</span>
            </p>
          </Link>
        </li>

        {/* Schedule Link */}
        <li>
          <Link href="/components/dashboard/Schedule">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/Schedule")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() =>
                handleSetActiveLink("/components/dashboard/Schedule")
              }
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <span>Schedule TimeSlots</span>
            </p>
          </Link>
        </li>
        {/* Classroom Details Link */}
        <li>
          <Link href="/components/dashboard/classroomDetails/Mechanical">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/classroomDetails/Mechanical")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() =>
                handleSetActiveLink(
                  "/components/dashboard/classroomDetails/Mechanical"
                )
              }
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </span>
              <span>Class Details</span>
            </p>
          </Link>
        </li>
        <li>
          <Link href="/components/dashboard/classroomDetails/Additional">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/components/dashboard/classroomDetails/Additional")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() =>
                handleSetActiveLink(
                  "/components/dashboard/classroomDetails/Additional"
                )
              }
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </span>
              <span>Additional Details</span>
            </p>
          </Link>
        </li>

        {/* Logout Link */}
        <li>
          <Link href="/">
            <p
              className={`flex items-center space-x-3 p-2 rounded-md font-medium ${
                isActive("/")
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline"
              }`}
              onClick={() => handleSetActiveLink("/logout")}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Home</span>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
