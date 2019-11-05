import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import './Main.css';

export class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { drawer: false };
        this.handleChange = this.handleChange.bind(this);
    }

    toggleDrawer(open) {
        console.log('entro');

        //this.handleChange(open);
        //this.props.drawer = open;
    }

    handleChange(e) {
        this.setState({
            drawer: e
        });
    }

    options(){
        return (
            <div>
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" className='colorBar'>
                    <Toolbar>
                        <Button onClick={this.toggleDrawer(true)}>boton</Button>
                        <IconButton edge="start" aria-label="menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon className='menuIcon' />
                        </IconButton>
                        <Typography variant="h6" >
                            Task Planner
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.props.drawer} onClose={this.toggleDrawer(false)}>
                    {this.options()}
                </Drawer>
            </React.Fragment>
        );
    }
}