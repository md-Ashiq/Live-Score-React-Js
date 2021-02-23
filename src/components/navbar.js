import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ()=>{
    return (
        <AppBar  position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography>
                    Live Score
                </Typography>
            </Toolbar>

        </AppBar>
    )
}
export default Navbar;