import React from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position="static">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" >Recipes</Typography>
                <img className={classes.image} src={logo} alt="images" height="100" />            
            </div>    
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;