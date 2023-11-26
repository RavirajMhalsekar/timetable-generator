import Header from "../Header";
import RoomForm from "./RoomForm";
import RoomTable from "./RoomTable";
const RoomPage: React.FC = () => {
  return (
    <div>
      <Header header="Room Details" />
      <div className="bg-white  text-left p-3 rounded-2xl mt-3 w-full shadow-xl">
        <RoomForm />
        <RoomTable />
      </div>
    </div>
  );
};

export default RoomPage;
