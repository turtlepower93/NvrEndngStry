const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
    content: {
        type:String, 
        required:true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'Sentence'
    },
}, {
    timestamps:true
})

const commentSchema = new Schema({
    content: {
        type:String, 
        required:true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    },
    userName: String,
    avatar: String
}, {
    timestamps:true
})

const storySchema = new Schema({
    title: {
        type:String,
        required:true
    },
    genre: {
        type:String,
        required:true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    userName: String,
    avatar: String,
    sentences:[sentenceSchema],
    comments:[commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Story', storySchema)