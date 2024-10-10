const mongoose = require('mongoose');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const employeeSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return emailRegex.test(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    MobileNo: {
        type: String,
        required: true,
        unique: true
    },
    Designation: {
        type: String,
        required: true,
        enum: ['HR', 'Manager', 'Sales']
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Others']
    },
    Course: {
        type: String,
        required: true,
        enum: ['MCA', 'BCA', 'BSC']
    },
    Image: {
        type: String,
        required: true
    }
});

const adminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
});

// Create models
const Admin = mongoose.model('Admin', adminSchema);
const Employee = mongoose.model('Employee', employeeSchema);

// Export models
module.exports = { Admin, Employee };