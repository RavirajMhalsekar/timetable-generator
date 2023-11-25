import Link from "next/link";
import React from 'react';
import { Button } from 'antd';

const HomePage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-6">Time Table Generator</h1>

    <div className="flex">
      {/* Use Link component for client-side navigation */}
      <Link href="/components/dashboard/rooms">
        <Button type="primary" key="console">
         Dashboard
        </Button>
      </Link>
      <div className="mr-4"></div>
      {/* Another link button */}
      <Link href="/buy">
        <Button key="buy">/</Button>
      </Link>
    </div>
  </div>
);

export default HomePage;
