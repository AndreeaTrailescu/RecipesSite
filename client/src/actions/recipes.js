import * as api from '../api';

export const getRecipes = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchRecipes(page); 
        
        
        dispatch ({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const getRecipeBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchRecipesBySearch(searchQuery);
        console.log(data);
        dispatch ({ type: 'FETCH_BY_SEARCH', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.createRecipe(recipe);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.updateRecipe(id, recipe);
        dispatch({ type: 'UPDATE', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        await api.deleteRecipe(id);
        dispatch({ type: 'DELETE', PAYLOAD: id });
    } catch (error) {
        console.log(error.message);
    } 
}

export const likeRecipe = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeRecipe(id);
        dispatch({ type: 'LIKE', payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}