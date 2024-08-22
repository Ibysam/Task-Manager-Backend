// Utils is the short for utilities which refers to a collection of helper functions or modules designed to perform common tasks on multiple functions

// This task often includes things like data validation, formatting or other repetitive operation that are use accross different part of the  application
const mongoose = require("mongoose");
const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
};

module.exports = validateID;
