const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        theme: {
            type: String,
        },
        body: {
            type: String,
            required: true,

        },
        coverImage: {
            type: String,
            required: false,
        },
        createdBy: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]

    }, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);