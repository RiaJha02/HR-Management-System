const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
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
            from : {
                type : Date,
                required : true
            },
            to :{
                type : Date,
                required : true
            },
            reason : {
                type : String,
                required : true
            },
            status : {
                type : Number,
                default : 0
            },
            time : {
                type : Date,
                default : Date.now
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
            },
            time : {
                type : Date,
                default : Date.now
            }
        }
    ],
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);