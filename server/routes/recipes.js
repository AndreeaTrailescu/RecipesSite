import express from 'express';
import { getRecipes, createRecipe } from '../controllers/recipes.js';

// http://localhost:5000/recipes

const router = express.Router();

router.get('/', getRecipes);
router.post('/', createRecipe)

export default router;