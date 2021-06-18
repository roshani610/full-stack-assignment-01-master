const mysql = require('mysql');

module.exports = {

  connectToMySQL: async (options) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          let connection = mysql.createConnection(options);
          await connection.connect();
          console.log('MySQL databse connected')
          return resolve(connection)
        } catch (error) {
          console.error(error)
          return reject(error);
        }
      })()
    })
  }

}
