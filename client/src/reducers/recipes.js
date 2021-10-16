const reducer = (state = { isLoading: true, recipes: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case 'FETCH_BY_SEARCH':
            return {
                ...state,
                recipes: action.payload
            };
        case 'FETCH_RECIPE':
            return {
                ...state,
                recipe: action.payload
            };
        case 'FETCH_ALL':
            return {
                ...state,
                recipes: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case 'COMMENT':
            return {
                ...state,
                recipes: state.recipes.map((recipe) => {
                    if(recipe._id === action.payload._id) {
                        return action.payload;
                    }
                    return recipe;
                }),
            };
        case 'CREATE':
            return { ...state, recipes:  [...state.recipes, action.payload]};
        case 'UPDATE':
            return { ...state, recipes:  state.recipes.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe))};
        case 'DELETE':
            return { ...state, recipes:  state.recipes.filter((recipe) => recipe._id !== action.payload)};
        case 'LIKE':
            return { ...state, recipes: state.recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe)};
        default:
            return state;
    }
} 


export default reducer;
