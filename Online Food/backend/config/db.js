import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bujji566:Bujji566@cluster0.e18mgag.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}