const oracledb = require('oracledb');

async function connectToOracle() {
  try {
    const connection = await oracledb.getConnection({
      user: 'username',
      password: 'password',
      connectString: 'connectionString'
    });
    return connection;
  } catch (error) {
    console.error('Error connecting to Oracle database:', error);
  }
}

export default connectToOracle;