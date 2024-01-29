// import connectToOracle from './ConnectionDB';

async function SubmitCompClassData(compClassFormData) {
    // const connection = await connectToOracle();
    const sql = `INSERT INTO comp_class_data (fe_subjects, se_subjects, te_subjects, be_subjects, fe_strength, se_strength, te_strength, be_strength, fe_practical, se_practical, te_practical, be_practical) 
                 VALUES (:feValue, :seValue, :teValue, :beValue, :feStrength, :seStrength, :teStrength, :beStrength, :fePractical, :sePractical, :tePractical, :bePractical)`;
  
    try {
    //   await connection.execute(sql, {
    //     feValue: compClassFormData.feValue,
    //     seValue: compClassFormData.seValue,
    //     teValue: compClassFormData.teValue,
    //     beValue: compClassFormData.beValue,
    //     feStrength: compClassFormData.feStrength,
    //     seStrength: compClassFormData.seStrength,
    //     teStrength: compClassFormData.teStrength,
    //     beStrength: compClassFormData.beStrength,
    //     fePractical: compClassFormData.fePractical,
    //     sePractical: compClassFormData.sePractical,
    //     tePractical: compClassFormData.tePractical,
    //     bePractical: compClassFormData.bePractical,
    //   });
      console.log(
        compClassFormData.feValue,
        compClassFormData.seValue,
        compClassFormData.teValue,
        compClassFormData.beValue,
        compClassFormData.feStrength,
        compClassFormData.seStrength,
        compClassFormData.teStrength,
        compClassFormData.beStrength,
        compClassFormData.fePractical,
        compClassFormData.sePractical,
        compClassFormData.tePractical,
        compClassFormData.bePractical,
        'CompClass form data submitted successfully'
      );
    } catch (error) {
      console.error('Error submitting CompClass form data:', error);
    } finally {
      // await connection.close();
    }
  }
  
  export default SubmitCompClassData;
  