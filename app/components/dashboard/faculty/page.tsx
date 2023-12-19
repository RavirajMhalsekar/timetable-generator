import Header from "../Header";
import FacultyForm from "./FacultyForm";
import FacultyList from "./FacultyList";
const RoomPage: React.FC = () => {
  return (
    <div>
      <Header header="Faculty Details" />
      <div className="bg-white  text-left p-3 rounded-2xl mt-3 w-full shadow-xl">
        <FacultyForm/>
        <FacultyList/>
      </div>
    </div>
  );
};

export default RoomPage;
