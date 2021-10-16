import * as api from '../api/index.js';

export const getRecipe = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.fetchRecipe(id); 
        
        
        dispatch ({ type: 'FETCH_RECIPE', payload: data });
        dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
}

export const getRecipes = (page) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.fetchRecipes(page); 
        
        
        dispatch ({ type: 'FETCH_ALL', payload: data });
        dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error.message);
    }
}

export const getRecipeBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data: { data } } = await api.fetchRecipesBySearch(searchQuery);
        console.log(data);
        dispatch ({ type: 'FETCH_BY_SEARCH', payload: data });
        dispatch({ type: 'END_LOADING' });
    } catch (error) {
        console.log(error);
    }
}

export const createRecipe = (recipe, history) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await api.createRecipe(recipe);
        history.push(`/recipes/${data._id}`);
        dispatch({ type: 'CREATE', payload: data });
        dispatch({ type: 'END_LOADING' });
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
    const user = JSON.parse(localStorage.getItem('profile'));

    try {
        const { data } = await api.likeRecipe(id, user?.token);
        dispatch({ type: 'LIKE', payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const commentRecipe = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);
        dispatch({ type: 'COMMENT', payload: data });

        return data.comments;
    } catch (error) {
        console.log(error);
    }
}