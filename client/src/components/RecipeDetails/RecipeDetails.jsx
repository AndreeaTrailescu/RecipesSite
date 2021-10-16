import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import moment from'moment';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { getRecipe, getRecipeBySearch } from '../../actions/recipes';
import CommentSection from './CommentSection';

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
        <Paper style={{ padding: '20px', borderRadius: '15px', background: '#F7F4EF' }} elevation={12}>
        <div className={classes.card}>
            <div className={classes.section}>
                <Typography className={classes.section} variant="h3" component="h2">{recipe.title}</Typography>
                <Typography className={classes.section} gutterBottom variant="h6" color="textSecondary" component="h2">{recipe.tags.map((tag) => `#${tag} `)}</Typography>
                <Typography className={classes.section} gutterBottom variant="body1" component="p" style={{ fontSize: '30px' }}>{recipe.description}</Typography>
                <Typography className={classes.section} variant="h6"><strong>Created by:</strong> {recipe.name}</Typography>
                <Typography className={classes.section} variant="body1">{moment(recipe.dateWascreatedAt).fromNow()}</Typography>
                <Divider style={{ margin: '20px 0' }} />
                <CommentSection recipe={recipe} />
                <Divider style={{ margin: '20px 0' }} />
            </div>
            <div className={classes.imageSection}>
                <img className={classes.media} src={recipe.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={recipe.title} />
            </div>
        </div>
        {recommendedRecipes.length && (
            <div className={classes.section}>
                <Typography className={classes.section} gutterBottom variant="h5">You might also like:</Typography>
                <div className={classes.recommendedPosts}>
                    {recommendedRecipes.map(({ title, description, name, likes, selectedFile, _id }) => (
                        <div style={{ margin: '20px', cursor: "pointer" }} onClick={() => openRecipe(_id)} key={_id}>
                            <Typography className={classes.section} gutterBottom variant="h6">{title}</Typography>
                            <Typography className={classes.section} gutterBottom variant="subtitle2">{name}</Typography>
                            <Typography className={classes.section} gutterBottom variant="subtitle2">{description}</Typography>
                            <Typography className={classes.section} gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                            <img className={classes.recommendedImage} src={selectedFile} width="200px" alt={title} /> 
                        </div>
                    ))}
                </div>
            </div>
        )}
        </Paper>    
    );
};

export default RecipeDetails;
