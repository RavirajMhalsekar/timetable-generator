import { Client, Databases, ID } from "appwrite";
import { notification } from "antd";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65cca38ecf87da7b211a");

const databases = new Databases(client);

async function SubmitFacultyData(formData) {
  try {
    const collectionId = "65cca3db4edc1e2a17bf";
    const databaseID = "65cca3b35db95a90e8c4";
    await databases.createDocument(databaseID, collectionId, ID.unique(), {
      name: formData.facultyName,
      designation: formData.designation,
      department: formData.department,
      shortName: formData.shortName,
    });
    notification.success({
      message: "Form data submitted successfully!",
      placement: "topRight",
      duration: 3,
    });
    return { ok: true, message: "Data added." };
  } catch (error) {
    console.error("Error adding document:", error);
    notification.error({
      message: "Error submitting form data!",
      placement: "topRight",
      duration: 3,
    });
    return { ok: false, message: "Failed to add data." };
  }
}

export default SubmitFacultyData;

