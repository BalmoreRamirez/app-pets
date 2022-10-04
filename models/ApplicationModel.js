const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const AdopterScheme = new mongoose.Schema(
    {
        date: {
            type: String,
        },
        IdPet: {
            type: mongoose.Types.ObjectId,
            unique:true,
            require:true
        },
        IdAdopter: {
            type: mongoose.Types.ObjectId,
            unique:true,
            require:true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

AdopterScheme.plugin(mongooseDelete, {overrideMethods:'all'})
module.exports = mongoose.model("applications", AdopterScheme);
