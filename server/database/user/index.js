import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, },
    address: [{detail:{type: String}, for:{type: String}}],
    phoneNumber: [{type: Number}],
});

export const UserModal = mongoose.model("Users", UsersSchema);
