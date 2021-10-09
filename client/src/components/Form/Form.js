import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createRecipe } from '../../actions/recipes';


const Form = () => {
    const [recipeData, setRecipeData] = useState({
        creator: '', title:'', description:'', tags:'', photo:''
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createRecipe(recipeData));
    }

    return (
        <Paper className={classes.paper} elevation={12}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" className={classes.write}>Create a Recipe</Typography>
                <TextField name="creator" variant="filled" label="Creator" fullWidth value={recipeData.creator} onChange={(e) => setRecipeData({ ...recipeData, creator: e.target.value })}/>
                <TextField name="title" variant="filled" label="Titlu" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}/>
                <TextField name="description" variant="filled" label="Descriere" fullWidth value={recipeData.description} onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}/>
                <TextField name="tags" variant="filled" label="Tags" fullWidth value={recipeData.tags} onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setRecipeData({ ...recipeData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Add Recipe</Button>
            </form>
        </Paper>
    );
}

export default Form;