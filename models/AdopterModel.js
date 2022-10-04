const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const AdopterScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        lastname: {
            type: String,
        },
        telephone: {
            type: Number,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

AdopterScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("adopters", AdopterScheme);
