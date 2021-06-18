var Mongoose = require('mongoose').Mongoose;

const apiDB = new Mongoose();
apiDB.Promise = global.Promise;

module.exports = {

  getAppAPIMongoDB: () => apiDB,

  connectAppAPIMongoDB: async (url) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          let connection = await apiDB.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
          if (!connection) {
            console.error('Error connecting mongoDB')
            return reject('Error connecting mongoDB')
          }
          console.log(`connected to mongoDb : ${url}`)
          return resolve(connection)
        } catch (error) {
          console.error(error);
          return reject(error)
        }
      })()
    });
  }

}
