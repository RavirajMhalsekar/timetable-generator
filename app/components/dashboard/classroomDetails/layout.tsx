"use client";
import Link from "next/link";
import Header from "../Header";
import { useState } from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeLink, setActiveLink] = useState(
    "/components/dashboard/classroomDetails/Mechanical"
  );

  // Function to update the active link
  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  // Function to determine if a link is active
  const isActive = (link: string) => activeLink === link;

  return (
    <>
      <Header header="Class Details" />

            <div className=" w-full ">
        <div>{children}</div>
      </div>
    </>
  );
}
