"use client";
import React, { useState } from 'react';
import type { SelectProps } from 'antd';
import { Select, Space ,Button,InputNumber,Form} from 'antd';

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];


const addFeSubjects = (optionsArray: ItemProps[]) => {
  // Clear the array before adding custom elements
  optionsArray.length = 0;

  // Add your custom elements here
  optionsArray.push({
    label: 'Custom Element 1',
    value: 'custom1',
  });
  optionsArray.push({
    label: 'Custom Element 2',
    value: 'custom2',
  });

  return optionsArray;
};
const addSeSubjects = (optionsArray: ItemProps[]) => {
  // Clear the array before adding custom elements
  optionsArray.length = 0;

  // Add your custom elements here
  optionsArray.push({
    label: 'Custom Element 1',
    value: 'custom1',
  });
  optionsArray.push({
    label: 'Custom Element 2',
    value: 'custom2',
  });

  return optionsArray;
};

const addTeSubjects = (optionsArray: ItemProps[]) => {
  // Clear the array before adding custom elements
  optionsArray.length = 0;

  // Add your custom elements here
  optionsArray.push({
    label: 'Custom Element 1',
    value: 'custom1',
  });
  optionsArray.push({
    label: 'Custom Element 2',
    value: 'custom2',
  });

  return optionsArray;
};

const addBeSubjects = (optionsArray: ItemProps[]) => {
  // Clear the array before adding custom elements
  optionsArray.length = 0;

  // Add your custom elements here
  optionsArray.push({
    label: 'Custom Element 1',
    value: 'custom1',
  });
  optionsArray.push({
    label: 'Custom Element 2',
    value: 'custom2',
  });

  return optionsArray;
};

function ITClassForm() { 
    // State for FE section
    const [feValue, setFeValue] = useState<string[]>([]);
    // State for SE section
    const [seValue, setSeValue] = useState<string[]>([]);
    // State for TE section
    const [teValue, setTeValue] = useState<string[]>([]);
    // State for BE section
    const [beValue, setBeValue] = useState<string[]>([]);  

    const [feStrength, setfeStrength] = useState<number | undefined>();
    const [seStrength, setseStrength] = useState<number | undefined>();
    const [teStrength, setteStrength] = useState<number | undefined>();
    const [beStrength, setbeStrength] = useState<number | undefined>();

    const [fePractical, setfePractical] = useState<number | undefined>(); 
    const [sePractical, setsePractical] = useState<number | undefined>(); 
    const [tePractical, settePractical] = useState<number | undefined>(); 
    const [bePractical, setbePractical] = useState<number | undefined>(); 
   

    const [touchedFields, setTouchedFields] = useState({
      feStrength: false,
      seStrength: false,
      teStrength: false,
      beStrength: false,
      fePractical:false,
      sePractical:false,
      tePractical:false,
      bePractical:false,
     
    }); 
   
    const handleFeStrengthChange = (value: number | undefined | null) => {
      setfeStrength(value === null ? undefined : value);
      handleFieldTouch("feStrength");
    }; 
    const handleSeStrengthChange = (value: number | undefined | null) => {
      setseStrength(value === null ? undefined : value);
      handleFieldTouch("seStrength");
    }; 
    const handleTeStrengthChange = (value: number | undefined | null) => {
      setteStrength(value === null ? undefined : value);
      handleFieldTouch("teStrength");
    }; 
    const handleBeStrengthChange = (value: number | undefined | null) => {
      setbeStrength(value === null ? undefined : value);
      handleFieldTouch("beStrength");
    }; 
    const handleFePracticalChange = (value: number | undefined | null) => {
      setfePractical(value === null ? undefined : value);
      handleFieldTouch("fePractical");
    }; 
    const handleSePracticalChange = (value: number | undefined | null) => {
      setsePractical(value === null ? undefined : value);
      handleFieldTouch("sePractical");
     }; 
    const handleTePracticalChange = (value: number | undefined | null) => {
      settePractical(value === null ? undefined : value);
      handleFieldTouch("tePractical");
     }; 
    const handleBePracticalChange = (value: number | undefined | null) => {
     setbePractical(value === null ? undefined : value);
     handleFieldTouch("bePractical");
     }; 
   

    const handleFieldTouch = (field: string) => {
      setTouchedFields({
        ...touchedFields,
        [field]: true,
      });
    };
  
   // Props for each Select component
   const feSelectProps: SelectProps = {
     mode: 'multiple',
     style: { width: '100%' },
     value: feValue,
     options: addFeSubjects(options),
     onChange: (newValue: string[]) => {
       setFeValue(newValue); 
       console.log('Selected Values:', newValue);

     },
     placeholder: 'Subjects',
     maxTagCount: 'responsive',
   };
 
   const seSelectProps: SelectProps = {
     mode: 'multiple',
     style: { width: '100%' },
     value: seValue,
     options: addSeSubjects(options),
     onChange: (newValue: string[]) => {
       setSeValue(newValue);
       console.log('Selected Values:', newValue);
     },
     placeholder: 'Subjects',
     maxTagCount: 'responsive',
   };
 
   const teSelectProps: SelectProps = {
     mode: 'multiple',
     style: { width: '100%' },
     value: teValue,
     options: addTeSubjects(options),
     onChange: (newValue: string[]) => {
       setTeValue(newValue);
       console.log('Selected Values:', newValue);
     },
     placeholder: 'Subjects',
     maxTagCount: 'responsive',
   };
 
   const beSelectProps: SelectProps = {
     mode: 'multiple',
     style: { width: '100%' },
     value: beValue,
     options: addBeSubjects(options),
     onChange: (newValue: string[]) => {
       setBeValue(newValue);
       console.log('Selected Values:', newValue);
     },
     placeholder: 'Subjects',
     maxTagCount: 'responsive',
   };
 
  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="mr-5">FE</h1> 
       
        <Form.Item className='mr-5'
              validateStatus={
                touchedFields.feStrength && feStrength === undefined ? "error" : ""
              }
              help={
                touchedFields.feStrength && feStrength === undefined
                  ? "Please enter the Fe  Strength"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Strength
              </label>
              <InputNumber
                type="number"
                value={feStrength}
                onChange={handleFeStrengthChange}
                className={`bg-gray-50 border ${
                  touchedFields.feStrength && feStrength === undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the Strength"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
            <Form.Item className='mr-5'
              validateStatus={
                touchedFields.fePractical && fePractical === undefined ? "error" : ""
              }
              help={
                touchedFields.fePractical && fePractical === undefined
                  ? "Please enter the Fe  Practical"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
              Practical Batch
              </label>
              <InputNumber
                type="number"
                value={fePractical}
                onChange={handleFePracticalChange}
                className={`bg-gray-50 border ${
                  touchedFields.fePractical && fePractical=== undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                placeholder="Enter the Practical Batch"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
           
            
          <Space direction="vertical" className='w-48 h-12  '>
          <Select {...feSelectProps} />
        </Space>
      </div>

      <div className="flex items-center mb-4">
        <h1 className="mr-5">SE</h1>
        <Form.Item className='mr-5'
              validateStatus={
                touchedFields.seStrength && seStrength === undefined ? "error" : ""
              }
              help={
                touchedFields.seStrength && seStrength === undefined
                  ? "Please enter the Fe  Strength"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Strength
              </label>
              <InputNumber
                type="number"
                value={seStrength}
                onChange={handleSeStrengthChange}
                className={`bg-gray-50 border ${
                  touchedFields.seStrength && seStrength === undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the Strength"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
            <Form.Item className='mr-5'
              validateStatus={
                touchedFields.sePractical && sePractical === undefined ? "error" : ""
              }
              help={
                touchedFields.sePractical && sePractical === undefined
                  ? "Please enter the Fe  Practical"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
              Practical Batch
              </label>
              <InputNumber
                type="number"
                value={sePractical}
                onChange={handleSePracticalChange}
                className={`bg-gray-50 border ${
                  touchedFields.sePractical && sePractical=== undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                placeholder="Enter the Practical Batch"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
    
           <Space direction="vertical" className='w-48 h-12'>
          <Select {...seSelectProps} />
        </Space>
      </div>

      <div className="flex items-center mb-4">
        <h1 className="mr-5">TE</h1>
        <Form.Item className='mr-5'
              validateStatus={
                touchedFields.teStrength && teStrength === undefined ? "error" : ""
              }
              help={
                touchedFields.teStrength && teStrength === undefined
                  ? "Please enter the Fe  Strength"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Strength
              </label>
              <InputNumber
                type="number"
                value={teStrength}
                onChange={handleTeStrengthChange}
                className={`bg-gray-50 border ${
                  touchedFields.teStrength && teStrength === undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the Strength"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
            <Form.Item className='mr-5'
              validateStatus={
                touchedFields.tePractical && tePractical === undefined ? "error" : ""
              }
              help={
                touchedFields.tePractical && tePractical === undefined
                  ? "Please enter the Fe  Practical"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
              Practical Batch
              </label>
              <InputNumber
                type="number"
                value={tePractical}
                onChange={handleTePracticalChange}
                className={`bg-gray-50 border ${
                  touchedFields.tePractical && tePractical=== undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                placeholder="Enter the Practical Batch"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
      
           <Space direction="vertical" className='w-48 h-12'>
          <Select {...teSelectProps} />
        </Space>
      </div>

      <div className="flex items-center mb-4">
        <h1 className="mr-5">BE</h1>
        <Form.Item className='mr-5'
              validateStatus={
                touchedFields.feStrength && feStrength === undefined ? "error" : ""
              }
              help={
                touchedFields.feStrength && feStrength === undefined
                  ? "Please enter the Fe  Strength"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Strength
              </label>
              <InputNumber
                type="number"
                value={beStrength}
                onChange={handleBeStrengthChange}
                className={`bg-gray-50 border ${
                  touchedFields.feStrength && feStrength === undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Enter the Strength"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
            <Form.Item className='mr-5'
              validateStatus={
                touchedFields.bePractical && bePractical === undefined ? "error" : ""
              }
              help={
                touchedFields.bePractical && bePractical === undefined
                  ? "Please enter the Fe  Practical"
                  : ""
              }
            >
              <label className="block mb-2 text-sm font-medium text-gray-900">
              Practical Batch
              </label>
              <InputNumber
                type="number"
                value={bePractical}
                onChange={handleBePracticalChange}
                className={`bg-gray-50 border ${
                  touchedFields.bePractical && bePractical=== undefined
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                placeholder="Enter the Practical Batch"
                formatter={(value) =>
                  value ? `${value}`.replace(/[^0-9]/g, "") : ""
                }
              />
            </Form.Item>
        
         <Space direction="vertical" className='w-48 h-12'>
          <Select {...beSelectProps} />
        </Space>
      </div> 
      
      <Button  type="primary" >Primary Button</Button>
     
    </>
  );
}

export default ITClassForm;
