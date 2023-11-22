import SubjectForm from "./SubjectForm";

export default function SubjectsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
         Subject Details
        </h2>
      </div>
      <hr className="h-px my-4 bg-gray-300 border-0 "/>
      <SubjectForm/>
    </div>
  );
}
