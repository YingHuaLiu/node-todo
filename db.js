const fs = require('fs');
const home = process.env.HOME;
const path = require('path')
const dbPath = path.join(home, '.todo');

const db = {
  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, {flag: 'a+'}, (err, data) => {
          if (err) {
            reject(err)
          } else {
            let list
            try {
              list = JSON.parse(data.toString());
            } catch (e) {
              list = []
            }
            resolve(list)
          }
        }
      )
    })
  },
  write(list) {
    return new Promise((resolve, reject) => {
      const string = JSON.stringify(list)
      fs.writeFile(dbPath, string + '\n', err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}
module.exports = db;