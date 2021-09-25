import  mongoose  from "mongoose";

const ImageModal = new mongoose.Schema({
    images: [
        {
            location: {type: String, required: true},
        },
    ]
});

export const ImageModal = mongoose.model("Images", ImageSchema);