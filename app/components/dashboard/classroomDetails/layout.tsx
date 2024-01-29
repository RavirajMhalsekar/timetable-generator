"use client"
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link'; 
import { Switch, Space } from 'antd';


import Header from '../Header';
import MechClassForm from './Mechanical/MechClassForm'; 
import CompClassForm from './Computer/CompClassForm';
import EcompClassForm from './Ecomp/EcompClassForm';
import ITClassForm from './IT/ITClassForm';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedClass, setSelectedClass] = useState('Mechanical');

  const handleClassChange = (className: string) => {
    setSelectedClass(className);
  };

  return (
    <>
      <Header header="Class Details" />

      <div
        id="default-carousel"
        className="relative w-full flex flex-col items-center mt-5"
      > 
      
        {/* Classroom indicators */}
        <ul className="flex flex-row text-sm">
          <li>
            <Link
              href="/components/dashboard/classroomDetails/Mechanical"
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline ${
                selectedClass === 'Mechanical' ? 'bg-indigo-500 text-white' : ''
              }`}
              onClick={() => handleClassChange('Mechanical')}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span>Mechanical</span>
            </Link>
          </li>

          <li>
            <Link
              href="/components/dashboard/classroomDetails/Computer"
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline ${
                selectedClass === 'Computer' ? 'bg-indigo-500 text-white' : ''
              }`}
              onClick={() => handleClassChange('Computer')}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span>Computer</span>
            </Link>
          </li>

          <li>
            <Link
              href="/components/dashboard/classroomDetails/Ecomp"
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline ${
                selectedClass === 'Ecomp' ? 'bg-indigo-500 text-white' : ''
              }`}
              onClick={() => handleClassChange('Ecomp')}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <span>Ecomp</span>
            </Link>
          </li>

          <li>
            <Link
              href="/components/dashboard/classroomDetails/IT"
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:shadow-outline ${
                selectedClass === 'IT' ? 'bg-indigo-500 text-white' : ''
              }`}
              onClick={() => handleClassChange('IT')}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              <span>IT</span>
            </Link>
          </li> 
          
        </ul>  
        
      
 
      </div> 
      <div className='mt-7'>
      <Space direction="vertical">
    <Switch checkedChildren="Even" unCheckedChildren="Odd" defaultChecked />
     
  </Space>  
  </div>
      <div className="w-full mt-20 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
        {/* Render content based on the selected class */}
        {selectedClass === 'Mechanical' && <MechClassForm />}
        {selectedClass === 'Computer' && <CompClassForm />}
        {selectedClass === 'Ecomp' && <EcompClassForm />}
        {selectedClass === 'IT' && <ITClassForm />} 
        
      </div> 
     
    </>
  );
}

