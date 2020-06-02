const axios = require('axios');

class Ajax {

  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error('error'));
        }
      }, 1500);
    });
  }

  static async get() {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = Ajax;