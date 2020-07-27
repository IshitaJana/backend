const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var companySchema = new mongoose.Schema({
    NewForm:{
        form1:{
            firstname:String,
            lastname:String,
            address:String,
            city:String,
            state:String,
            pincode:String,
            gender:String
        }
     },
})
mongoose.model('company', companySchema);