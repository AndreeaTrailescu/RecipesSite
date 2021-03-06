import React from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import Recipes from '../Recipes/Recipes';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getRecipes, getRecipeBySearch } from '../../actions/recipes';
import { useEffect, useState } from 'react';
import  Pagination  from '../Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchRecipe();
        } 
    };

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    const searchRecipe = () => {
        if(search.trim() || tags) {
            dispatch(getRecipeBySearch({ search, tags: tags.join(',') }));
            history.push(`/recipes/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
            
        } else {
            history.push('/');
        }
    }

    return (
        <Grow in>
        <Container maxWidth="xl">
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={9}>
                    <Recipes setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField className={classes.firstTextField} name="search" variant="filled" label="Search Recipes" onKeyPress={handleKeyPress} fullWidth value={search} onChange={(e) =>setSearch(e.target.value) } />
                        <ChipInput className={classes.firstTextField} style={{ margin: '10px 0' }} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Search Tags" variant="filled" />
                        <Button variant="contained" onClick={searchRecipe} className={classes.searchButton}>Search</Button>
                    </AppBar>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    {(!searchQuery && !tags.length) && (
                        <Paper elevation={6} className={classes.pagination} variant="outlined">
                            <Pagination page={page} />
                        </Paper>
                    )};
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
};

export default Home;
