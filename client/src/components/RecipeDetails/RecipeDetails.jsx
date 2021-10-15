import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import moment from'moment';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { getRecipe, getRecipeBySearch } from '../../actions/recipes';

const RecipeDetails = () => {
    const { recipe, recipes, isLoading } = useSelector((state) => state.recipes);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getRecipe(id));
    }, [id]);

    useEffect(() => {
        if(recipe) 
            dispatch(getRecipeBySearch({ search: 'none', tags: recipe?.tags.join(',') }));
    }, [recipe]);

    if(!recipe) return null;

    if(isLoading) {
        return (<Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />

        </Paper>
        );
    }

    const recommendedRecipes = recipes.filter(({ _id }) => _id !== recipe._id);

    const openRecipe = (_id) => history.push(`/recipes/${_id}`);

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
            <div className={classes.section}>
                <Typography variant="h3" component="h2">{recipe.title}</Typography>
                <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{recipe.tags.map((tag) => `#${tag} `)}</Typography>
                <Typography gutterBottom variant="body1" component="p">{recipe.description}</Typography>
                <Typography variant="h6">Created by: {recipe.name}</Typography>
                <Typography variant="body1">{moment(recipe.dateWascreatedAt).fromNow()}</Typography>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                <Divider style={{ margin: '20px 0' }} />
            </div>
            <div className={classes.imageSection}>
                <img className={classes.media} src={recipe.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={recipe.title} />
            </div>
        </div>
        {recommendedRecipes.length && (
            <div className={classes.section}>
                <Typography gutterBottom variant="h5">You might also like:</Typography>
                <Divider  />
                <div className={classes.recommendedPosts}>
                    {recommendedRecipes.map(({ title, description, name, likes, selectedFile, _id }) => (
                        <div style={{ margin: '20px', cursor: "pointer" }} onClick={() => openRecipe(_id)} key={_id}>
                            <Typography gutterBottom variant="h6">{title}</Typography>
                            <Typography gutterBottom variant="subtitle2">{name}</Typography>
                            <Typography gutterBottom variant="subtitle2">{description}</Typography>
                            <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                            <img src={selectedFile} width="200px" /> 
                        </div>
                    ))}
                </div>
            </div>
        )}
        </Paper>    
    );
};

export default RecipeDetails;
