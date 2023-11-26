import Header from "@/app/Header";
import SubjectForm from "./SubjectForm";

export default function SubjectsPage() {
  return (
    <div>
      <Header header="Subject Details" />
      <div className="bg-white  text-left p-3 rounded-2xl mt-3 w-fit shadow-xl">
        <SubjectForm />
      </div>
    </div>
  );
}
