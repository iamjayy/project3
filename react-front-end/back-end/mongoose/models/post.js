const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:  true,
    },
    body: {
        type: String,
        required: "Body is Required",
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    likes: [{ type: ObjectId, ref: "user" }],
    comments: [
        {
            text: String,
            created: {type: Date, default: Date.now},
            postedBy: {type: ObjectId, ref: "User"}
        }
    ]
});

module.exports = mongoose.model("Post", postSchema);