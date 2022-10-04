const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const PetScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        race: {
            type: String,
        },
        age: {
            type: Number,
        },
        description: {
            type: String,
        },
        inadoption:{
            type: Boolean,
        }, 
        petstate: {
            vaccines: {
                type: Boolean,
            },
            description: {
                type: String,
            },
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

PetScheme.plugin(mongooseDelete, {overrideMethods:'all'})
module.exports = mongoose.model("pets", PetScheme);
