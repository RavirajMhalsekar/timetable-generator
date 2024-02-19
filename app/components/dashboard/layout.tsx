import { Inter } from "next/font/google";
import Sidebar from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="p-2 bg-gray-100">
        <div className="flex h-[92vh] m-5 rounded-2xl">
          <Sidebar />
          <div className="w-[74%] overflow-y-auto pl-4">
            {" "}
            
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
