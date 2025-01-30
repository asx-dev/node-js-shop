const colors = require("colors");

const success = (...params) => console.log(colors.cyan(...params));
const error = (...params) => console.error(colors.red(...params));

module.exports = { success, error };
