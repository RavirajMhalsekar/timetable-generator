import Header from "@/app/Header";
import SubjectForm from "./SubjectForm";
import SubjectList from "./SubjectList";

export default function SubjectsPage() {
  return (
    <div>
      <Header header="Subject Details" />
      <div className="bg-white  text-left p-3 rounded-2xl mt-5 w-full shadow-xl">
        <SubjectForm/>
        <SubjectList/>
      </div>
    </div>
    
  );
}
