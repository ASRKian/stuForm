import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    standard: {
        type: Number,
        required: true
    },
    fatherName: {
        type: String,
        required: true

    },
    motherName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const details = mongoose.model('Details', StudentSchema)

export default details