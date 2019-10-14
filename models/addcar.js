const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const AddcarSchema = new mongoose.Schema(
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
            trim: true,
            required: true,
            maxlength: 32
        }, 
        FavouriteColor: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        
        Email: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        StartTime: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        WebsiteAddress: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        Title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        Subtitle: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        CGPA: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Addcar", AddcarSchema);