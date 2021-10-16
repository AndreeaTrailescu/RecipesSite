import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { commentRecipe } from '../../actions/recipes';

const CommentSection = ({ recipe }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const [comments, setComments] = useState(recipe?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentRecipe(finalComment, recipe._id));
    
        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography className={classes.section} gutterBottom variant="h6">Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography className={classes.section} key={i} gutterBottom variant="subtitle1">
                        <strong> {c.split(': ')[0]}</strong>
                        {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width: '70%' }}>
                        <Typography className={classes.section} gutterBottom variant="h6">Write a comment:</Typography>
                        <TextField 
                            className={classes.root}
                            fullWidth
                            rows={4}
                            variant="filled"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button className={classes.commentButton} style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;