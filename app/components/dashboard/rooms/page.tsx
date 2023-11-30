import Header from "../Header";
import RoomForm from "./RoomForm";
import RoomTable from "./RoomTable";
const RoomPage: React.FC = () => {
  return (
    <div>
      <Header header="Room Details" />
      <div className="mt-20 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl">
      
        <RoomForm />
        <RoomTable /> 
       
      </div>
    </div>
  );
};

export default RoomPage;
