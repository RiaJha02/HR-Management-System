const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requiredL: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type : String
    },
    status: {
        type : String,
        default : 'Employee'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);