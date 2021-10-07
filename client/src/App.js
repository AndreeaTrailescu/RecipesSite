import React from 'react';
import { Container, AppBar, Typography} from '@material-ui/core';

import logo from './images/logo.png';

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Recipes</Typography>
                <img src={logo} alt="images" height="100" />
            </AppBar>

        </Container>
    )
}

export default App;