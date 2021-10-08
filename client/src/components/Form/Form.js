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
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creatig A Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={recipeData.creator} onChange={(e) => setRecipeData({ ...recipeData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Titlu" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}/>
                <TextField name="description" variant="outlined" label="Descriere" fullWidth value={recipeData.description} onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={recipeData.tags} onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setRecipeData({ ...recipeData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add Recipe</Button>
            </form>
        </Paper>
    );
}

export default Form;