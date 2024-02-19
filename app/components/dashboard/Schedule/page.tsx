import Header from "../Header";
import MeetingForm from "./MeetingForm";
import MeetingTable from "./MeetingTable";
import WorkshopForm from "./WorkshopForm";
import WorkshopTable from "./WorkshopTable";
const RoomPage: React.FC = () => {
  return (
    <div>
      <Header header="Meeting Schedule" />
      <div className="mt-2 mb-10 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
        <MeetingForm />
        <MeetingTable />
      </div>
      <Header header="Workshop Schedule" />
      <div className="mt-2 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
        <WorkshopForm />
        <WorkshopTable />
      </div>
    </div>
  );
};

export default RoomPage;
