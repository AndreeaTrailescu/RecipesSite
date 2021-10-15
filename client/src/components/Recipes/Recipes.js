import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Recipe from './Recipe/Recipe';
import useStyles from './styles';


const Recipes = ({ setCurrentId }) => {
    const { recipes, isLoading } = useSelector((state) => state.recipes);
    const classes = useStyles();

    if(!recipes.length && !isLoading) return "No recipes";

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {recipes.map((recipe) => (
                    <Grid key={recipe._id} item xs={12} sm={12} md={6} lg={4}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Recipes;