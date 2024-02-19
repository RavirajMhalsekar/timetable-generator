import MechClassForm from "./MechClassForm";

const MechPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mt-3  bg-white p-5 rounded-2xl shadow-lg ">
        <p className=" mb-3 text-center text-lg">
          Mechanical Department
        </p>
        <MechClassForm />
      </div>
    </div>
  );
};

export default MechPage;
