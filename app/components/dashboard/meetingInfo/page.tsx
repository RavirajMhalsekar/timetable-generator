import Header from "../Header";
import MeetingForm from "./MeetingForm";
import MeetingTable from "./MeetingTable";
const RoomPage: React.FC = () => {
  return (
    <div>
      <Header header="Meeting Details" />
      <div className="mt-20 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
      
        <MeetingForm />
        <MeetingTable /> 
       
      </div>
    </div>
  );
};

export default RoomPage;
