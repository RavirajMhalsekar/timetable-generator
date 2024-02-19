import ITClassForm from "./ITClassForm";

const ITPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mt-3 shadow-indigo-200 bg-white p-5 rounded-2xl shadow-xl ove">
        <p className="text-gray-700 mb-3">IT Department</p>
        <ITClassForm />
      </div>
    </div>
  );
};

export default ITPage;
