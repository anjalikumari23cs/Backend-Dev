// logger.js
const fs = require('fs');

/**
 * Appends a message with the current timestamp to activity.log
 * @param {string} message - The activity message to log
 */

function logActivity(message) {
  const timestamp = new Date().toLocaleString();
  const logMessage = `${timestamp} - ${message}\n`;

  fs.appendFile('activity.log', logMessage, (err) => {
    if (err) {
      console.log('Failed to write log');
    }
  });
  fs.readFile("activity.log", )
}

module.exports = { logActivity };