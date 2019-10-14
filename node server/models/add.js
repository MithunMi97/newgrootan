const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const AddSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        age: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        country: {
            type:String,
            trim:true,
            required: true,
            maxlength:32
        },
        DOB: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        gender: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        LanguagesKnown: {
            type: String,
            required: true,
            maxlength: 32
        }, 
        FavouriteColor: {
            type: String,
            required: true,
            maxlength: 32
        }, 

        
        Email: {
            type: String,
            required: true,
            maxlength: 32
        }, 
        StartTime: {
            type: String,
            required: true,
            maxlength: 32
        }, 
        WebsiteAddress: {
            type: String,
            required: true,
            maxlength: 32
        }, 
        Title: {
            type: String,
            required: true,
            maxlength: 32
        },
        SubTitle: {
            type: String,
            required: true,
            maxlength: 32
        },
        
        photo: {
            type: String,
            required: true,
            maxlength: 32
        },
        CGPA: {
            type: Number,
            required: true,
            maxlength: 32
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Add", AddSchema);