import express from 'express';
import { getRecipes, createRecipe, updateRecipe, deleteRecipe, likeRecipe } from '../controllers/recipes.js';

// http://localhost:5000/recipes

const router = express.Router();

router.get('/', getRecipes);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);
router.patch('/:id/likeRecipe', likeRecipe); 

export default router;