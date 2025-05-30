import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 20
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
    
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
    }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);