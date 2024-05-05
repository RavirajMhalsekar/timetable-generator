import React from 'react'
import Timetable from "./Timetable";
function page() {
  return (
    <div className='m-2'>
      <h1 className="text-3xl font-bold text-center py-6 text-gray-400 font-serif  ">
        Timetable generator
      </h1>
      <Timetable />
    </div>
  );
}

export default page
