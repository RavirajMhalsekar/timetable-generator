// import connectToOracle from './ConnectionDB';

async function SubmitRoomData(formData) {
    // const connection = await connectToOracle();
    const sql = `INSERT INTO form_data (subject, faculty, classroom) VALUES (:subject, :faculty, :classroom)`;
  
    try {
      // await connection.execute(sql, {
      //   subject: formData.subject,
      //   faculty: formData.faculty,
      //   classroom: formData.classroom
      // });
      console.log(formData.name,formData.capacity,'Form data submitted successfully');
      
    } catch (error) {
      console.error('Error submitting form data:', error);
    } finally {
      // await connection.close();
    }
  }
  
  export default SubmitRoomData;