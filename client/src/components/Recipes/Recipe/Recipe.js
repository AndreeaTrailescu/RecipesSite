import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button , Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteRecipe, likeRecipe } from '../../../actions/recipes';

const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.title}></CardMedia>
            <div>
                <Typography variant="h6" className={classes.person}>{recipe.creator}</Typography>
                <Typography variant="body2" className={classes.time}>{moment(recipe.dateWascreatedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" 
                onClick={() => setCurrentId(recipe._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{recipe.title}</Typography>
            <div className={classes.details}> 
                <Typography variant="body2" color="textSecondary" className={classes.tags}>{recipe.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
            <Typography variant="h5" gutterBottom>{recipe.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" 
                onClick={() => dispatch(likeRecipe(recipe._id))}>
                    <FavoriteIcon fontSize="small" style={{ fill: "#ff0066" }} />
                    {recipe.likeCount}
                </Button>
                <Button size="small" color="primary" 
                onClick={() => dispatch(deleteRecipe(recipe._id))}>
                    <DeleteIcon fontSize="small" style={{ fill: "red" }} />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Recipe;