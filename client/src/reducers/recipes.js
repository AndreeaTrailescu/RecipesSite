const reducer = (recipes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...recipes, action.payload];
        case 'UPDATE':
            return recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case 'DELETE':
            return recipes.filter((recipe) => recipe._id !== action.payload);
        case 'LIKE':
            return recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        default:
            return recipes;
    }
} 

export default reducer;
