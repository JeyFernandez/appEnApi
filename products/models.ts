import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    cantidad: Number,
    categories: String
});

export const Product = mongoose.model('Product', productSchema);