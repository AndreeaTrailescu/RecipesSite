import React, { useState } from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button , Typography, ButtonBase } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteRecipe, likeRecipe } from '../../../actions/recipes';
import { useHistory } from 'react-router-dom';

const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    const [likes, setLikes] = useState(recipe?.likes);
    const hasLikedRecipe = likes.find((like) => like === (user?.result?.googleId || user?.result?._id));

    const handleLike = async () => {
        dispatch(likeRecipe(recipe._id));
        if(hasLikedRecipe) {
            setLikes(recipe.likes.filter((id) => id !== (user?.result.googleId || user?.result?._id)));
        } else {
            setLikes([...recipe.likes, (user?.result.googleId || user?.result?._id) ]);
        }
    };

    const Likes = () => {
        if(likes.length > 0) {
            return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
                <><FavoriteIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''} `}</>
            ) : (
                <><FavoriteIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><FavoriteIcon fontSize="small" />&nbsp;Like</>;
    };

    const openRecipe = () => history.push(`/recipes/${recipe._id}`);

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openRecipe}>
                <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.title}></CardMedia>
                <div>
                    <Typography variant="h6" className={classes.person}>{recipe.name}</Typography>
                    <Typography variant="body2" className={classes.time}>{moment(recipe.dateWascreatedAt).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId === recipe?.creator || user?.result?._id === recipe?.creator) && (
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" 
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(recipe._id)}}>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                )};
                <Typography className={classes.title} variant="h5" gutterBottom>{recipe.title}</Typography>
                <div className={classes.details}> 
                    <Typography variant="body2" color="textSecondary" className={classes.tags}>{recipe.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">{recipe.description}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" style={{ color: '#ff0066' }} disabled={!user?.result}
                onClick={handleLike}>
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