import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    author: {
        type: String,
        required: [true, "Author is required"]
    },
    basePrice: {
        type: Number,
        required: [true, "Base price is required"]
    },
    finalPrice: {
        type: Number,
        required: [true, "Final price is required"]
    },
    banner: {
        type: String,
        required: [true, "Banner is required"]
    },
    details: {
        type: String,
        required: [true, "Details are required"]
    },
    publishedDate: {
        type: Date,
        required: [true, "Published date is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "Category is required"]
    }
})

const Book = mongoose.model("Book", bookSchema);
export default Book;