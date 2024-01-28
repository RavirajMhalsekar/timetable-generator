import { Client, Databases, ID } from "appwrite";
import { notification } from "antd";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65af81642532e75bf90e");

const databases = new Databases(client);

async function SubmitLabData(formData) {
  try {
    const collectionId = "65b1316de22874480ee7";
    const databaseID = "65b12ffa18f8493c948e";
    await databases.createDocument(databaseID, collectionId, ID.unique(), {
      name: formData.labName,
      subject: formData.subName,
      department: formData.department,
      capacity: formData.labCapacity,
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

export default SubmitLabData;
