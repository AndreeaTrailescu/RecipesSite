import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    selectedFile: String,
    tags: [String],
    likes: {
        type:[String],
        default: [],
    },
    comments: { type: [String], default: [], },
    dateWascreatedAt: {
        type: Date,
        default: new Date()
    },
});

const RecipeDescription = mongoose.model('RecipeDescription', recipeSchema);

export default RecipeDescription;
