import mongoose from 'mongoose';
import RecipeDescription from '../models/recipeDescription.js';

export const getRecipes = async (req, res) => {
    try {
        const  recipeDescriptions = await RecipeDescription.find();

        res.status(200).json(recipeDescriptions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRecipe = async (req, res) => {
    const recipe = req.body;

    const newRecipe = new RecipeDescription(recipe);
    
    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);

    } catch (error) {
        res.save(409).json({ message: error.message });
    }
}

export const updateRecipe = async (req, res) => {
    const { id: _id } = req.params;
    const recipe = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No recipe with this id');

    const updatedRecipe = await RecipeDescription.findByIdAndUpdate(_id, recipe, { new: true });

    res.json(updatedRecipe);
}