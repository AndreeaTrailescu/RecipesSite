import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
        <Container maxidth="xl">
            <Navbar />
            <Switch>
                <Route path="/" exact component={() => <Redirect to="/recipes" />} />
                <Route path="/recipes" exact component={Home} />
                <Route path="/recipes/search" exact component={Home} />
                <Route path="/recipes/:id" component={RecipeDetails} />
                <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/recipes" />)} />
            </Switch>
        </Container>
    </BrowserRouter>
    )
}

export default App;