"use client"
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export default function RoomsPage() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('inline');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <div className="bg-white h-[90vh] overflow-auto p-10">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
      >
        <Form.Item label="Field A" name="fieldA">
          <Input placeholder="Input placeholder" />
        </Form.Item>
        <Form.Item label="Field B" name="fieldB">
          <Input placeholder="Input placeholder" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
