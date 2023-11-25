"use client";
import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import type { DotPosition } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; 
import ClassroomDetailsForm from './CompClassroomDetails';
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: 'rgb(128, 128, 209)',
  lineHeight: '160px',
  textAlign: 'center', 
  background:'black',
  
};

const App: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>('top'); 

  const dotStyle: React.CSSProperties = {
    color: 'black', // Set the background color to black
  };
  

  return (
    <>
     
      <Carousel dotPosition={dotPosition}  dotStyle={dotStyle}  >
      <div > 
      <div style={contentStyle}>
            <ClassroomDetailsForm />
          </div>
          </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default App;