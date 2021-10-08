import React from 'react';
import { useSelector } from 'react-redux';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';


const Recipes = () => {
    const recipes = useSelector((state) => state.recipes);
    const classes = useStyles();

    console.log(recipes);

    return (
        <>
            <h1>RECIPES</h1>
            <Recipe />
        </>
    );
}

export default Recipes;