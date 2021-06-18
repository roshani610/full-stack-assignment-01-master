const bcrypt = require('bcrypt');
const mongoose = require('../../db/mongoose.connection').getAppAPIMongoDB()

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    type: {
        type: String,
        enum: ['WFH', 'office workplace']
    },
    dob: { type: Date },
    hobbies: { type: Array },
    picture: String
});

module.exports = mongoose.model('Employee', employeeSchema);
