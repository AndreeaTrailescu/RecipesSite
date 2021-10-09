import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    selectedFile: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    dateWascreatedAt: {
        type: Date,
        default: new Date()
    },
});

const RecipeDescription = mongoose.model('RecipeDescription', recipeSchema);

export default RecipeDescription;
