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
            require: true,

        },
        coverImageUrl: {
            type: String,
            require: false,
        },
        createdBy: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        }

    }, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);