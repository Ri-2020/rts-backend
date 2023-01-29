import { Timestamp } from "mongodb";
import mongoose, { SchemaType } from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 16,
    },
    LastActive : {
        type : Date,
    },
    rating : {
        type : Number,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      select: false,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rollNo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 15,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    profileLikes :[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
    likedProfiles:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
    email: {
      type: String,
      unique: true,
      trim: true,
      validate: {
        validator: (value) => {
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return value.match(re);
        },
        message: "Please enter a valid email address",
      },
    },
    mobile: {
      type: String,
      trim: true,
      unique: true,
    },
    collegeName:{
        type : String,
    },
    branch : {
        type : String,
    },
    age: {
      type: Number,
      min: 8,
    },
    gender: {
      type: String,
    },
    hobbies : [String], 
    profileImage: {
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/dolqf9s3y/image/upload/v1668325949/TikTok_mqkhq0.png",
      },
      public_id: String,
    },
    socialLinks :{
        gtihubProfile : {
            type : String,
            // url validator : [(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*) 
        },
        LinkedInProfile : {
            type : String,
        },
        TwitterProfile : {
            type : String,
        },
        website : {
            type : String,
        }
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    accountType: {
      type: String,
      required: true,
      enm: ["admin", "student" , 'mentor'],
      trim: true,
      // type: SchemaType.ObjectId,
    },
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    

  },
  { Timestamp: true }
);
userSchema.index({ location: "2dsphere" });

const UserModel = mongoose.model("user", userSchema);

export default UserModel;