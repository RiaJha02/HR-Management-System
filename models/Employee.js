const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requiredL: true,
        unique: true
    },
    avatar: {
        type :String
    },
    contact : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    dept : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    leaves : [
        {
            time : {
                type : Date,
                default : Date.now
            },
            reason : {
                type : String,
                required : true
            },
            status : {
                type : Boolean,
                default : false
            }
        }
    ],
    payroll : [
        {
            request : {
                type : String,
                required : true
            },
            amount : {
                type : String,
                required : true
            },
            mark : {
                type : Boolean,
                default : false
            }
        }
    ]
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);