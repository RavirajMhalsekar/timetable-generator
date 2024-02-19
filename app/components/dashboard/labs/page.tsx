import Header from "../Header";
import LabForm from "./LabForm";
import LabTable from "./LabTable";
const RoomPage: React.FC = () => {
  return (
    <div>
      <Header header="Lab Details" />
      <div className="mt-5 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
      
        <LabForm/>
        <LabTable/> 
       
      </div>
    </div>
  );
};

export default RoomPage;
