import mongoose from "mongoose";
import Parent from "../models/parent.js";



const url="mongodb://localhost:27017/manytrial"

mongoose.connect(url)

const db=mongoose.connection


const { Schema, model,Types}= mongoose
const objectID= Types.ObjectId

export default db;

console.log(("successfully connect to mongo"));


