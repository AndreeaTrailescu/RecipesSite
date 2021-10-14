const reducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BY_SEARCH':
            return {
                ...state,
                recipes: action.payload
            };
        case 'FETCH_ALL':
            return {
                ...state,
                recipes: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case 'DELETE':
            return state.filter((recipe) => recipe._id !== action.payload);
        case 'LIKE':
            return state.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        default:
            return state;
    }
} 

export default reducer;
