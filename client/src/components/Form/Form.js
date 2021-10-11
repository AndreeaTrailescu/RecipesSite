import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createRecipe, updateRecipe } from '../../actions/recipes';


const Form = ({ currentId, setCurrentId }) => {
    const [recipeData, setRecipeData] = useState({
        creator: '', title:'', description:'', tags:'', selectedFile:''
    })
    const classes = useStyles();
    const dispatch = useDispatch();
    const recipe =  useSelector((state) => currentId ? state.recipes.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if(recipe) setRecipeData(recipe);
    }, [recipe])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateRecipe(currentId, recipeData));
        } else {
            dispatch(createRecipe(recipeData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setRecipeData({
            creator: '', title:'', description:'', tags:'', selectedFile:''
        });
    }

    return (
        <Paper className={classes.paper} elevation={12}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" className={classes.write}>{ currentId ? 'Edit' : 'Create' } a Recipe</Typography>
                <TextField name="creator" variant="filled" label="Creator" fullWidth value={recipeData.creator} onChange={(e) => setRecipeData({ ...recipeData, creator: e.target.value })}/>
                <TextField name="title" variant="filled" label="Titlu" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}/>
                <TextField className={classes.description} name="description" variant="filled" label="Descriere" fullWidth multiline rows={4} value={recipeData.description} onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}/>
                <TextField name="tags" variant="filled" label="Tags" fullWidth value={recipeData.tags} onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setRecipeData({ ...recipeData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Add Recipe</Button>
                <Button className={classes.clearButton} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;