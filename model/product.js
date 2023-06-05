import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    link: String,
})

const Course = mongoose.model('course', courseSchema);

export {Course};
