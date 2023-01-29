import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: [String],
  updatedAt: {
    type: Date,
  },
  creatorType: {
    type: String,
  },
  postLink: {
    type: String,
  },
  isPassed : {
    type : Boolean,
    default: false,
  },
  postLikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true,
      },
      isEdited: {
        type: Boolean,
        default: false,
        required: true,
      },
      text: {
        type: String,
        required: true,
        default: "text",
      },
      image: [
        {
          url: {
            type: String,
          },
          public_id: {
            type: String,
          },
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
      },
      postType: {
        type: String,
        required: true,
        enm: ["update", "submission" , 'resourse'],
        trim: true,
        // type: SchemaType.ObjectId,
      },
      replies: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
          },
          text: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
          updatedAt: {
            type: Date,
          },
          isEdited: {
            type: Boolean,
            default: false,
          },
        },
      ],
      likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = mongoose.model("post", postSchema);
export default PostModel;
