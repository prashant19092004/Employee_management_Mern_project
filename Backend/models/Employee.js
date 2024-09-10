const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
    },
    dateOfBirth: {
        type: Date
    },
    department: {
        type: String,
        required: true
    },
    position: {
        type: String
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
