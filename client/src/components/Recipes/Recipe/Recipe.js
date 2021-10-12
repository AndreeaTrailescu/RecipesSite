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
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if(recipe.likes.length > 0) {
            return recipe.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
                <><FavoriteIcon fontSize="small" />&nbsp;{recipe.likes.length > 2 ? `You and ${recipe.likes.length - 1} others` : `${recipe.likes.length} like${recipe.likes.length > 1 ? 's' : ''} `}</>
            ) : (
                <><FavoriteIcon fontSize="small" />&nbsp;{recipe.likes.length} {recipe.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><FavoriteIcon fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.title}></CardMedia>
            <div>
                <Typography variant="h6" className={classes.person}>{recipe.name}</Typography>
                <Typography variant="body2" className={classes.time}>{moment(recipe.dateWascreatedAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === recipe?.creator || user?.result?._id === recipe?.creator) && (
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" 
                onClick={() => setCurrentId(recipe._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            )}
            <Typography className={classes.title} variant="h5" gutterBottom>{recipe.title}</Typography>
            <div className={classes.details}> 
                <Typography variant="body2" color="textSecondary" className={classes.tags}>{recipe.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">{recipe.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" style={{ color: '#ff0066' }} disabled={!user?.result}
                onClick={() => dispatch(likeRecipe(recipe._id))}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === recipe?.creator || user?.result?._id === recipe?.creator) && (
                    <Button size="small" color="primary" style={{ color: "red" }}
                    onClick={() => dispatch(deleteRecipe(recipe._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Recipe;