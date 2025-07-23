const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, '../../logs/server.log'), { flags: 'a' });

const logger = {
  info: (msg) => {
    const log = `[INFO] ${new Date().toISOString()} - ${msg}`;
    console.log(log);
    logStream.write(log + '\n');
  },
  error: (msg) => {
    const log = `[ERROR] ${new Date().toISOString()} - ${msg}`;
    console.error(log);
    logStream.write(log + '\n');
  },
};

module.exports = logger;
