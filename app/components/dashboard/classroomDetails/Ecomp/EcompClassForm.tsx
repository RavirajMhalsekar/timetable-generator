"use client";
import React, { useState } from 'react';
import type { SelectProps } from 'antd';
import { Select, Space ,Button} from 'antd';

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}
function EcompClassForm() { 
  const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);

  const selectProps: SelectProps = {
    mode: 'multiple',
    style: { width: '100%' },
    value,
    options,
    onChange: (newValue: string[]) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="mr-5">FE</h1> 
        
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        /> 
          <Space direction="vertical" className='w-48 h-12'>
      <Select {...selectProps} />
    
    </Space>
      </div>

      <div className="flex items-center mb-4">
        <h1 className="mr-5">SE</h1>
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
          <Space direction="vertical" className='w-48 h-12'>
      <Select {...selectProps} />
    
    </Space>
      </div>

      <div className="flex items-center mb-4">
        <h1 className="mr-5">TE</h1>
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
           <Space direction="vertical" className='w-48 h-12'>
      <Select {...selectProps} />
    
    </Space>
      </div>

      <div className="flex items-center mb-4">
        <h1 className="mr-5">BE</h1>
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        />
        <input
          placeholder="Basic usage"
          type="number"
          className="w-48 h-12 px-4 border rounded-md mb-4 mr-5"
        /> 
         <Space direction="vertical" className='w-48 h-12'>
      <Select {...selectProps} />
     
    </Space>
      </div> 
      
      <Button  type="primary" >Primary Button</Button>
     
    </>
  );
}

export default EcompClassForm;
