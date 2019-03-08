import React, { Component } from 'react';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon, Dialog } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    icon: {
        margin: 5
    },
    list_title: {
        marginLeft: 15
    }
};

class ProjectsDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <List>
                    <ListItem button key="join_link">
                        <ListItemIcon>
                            <ListItemIcon><Icon>share</Icon></ListItemIcon>
                            <ListItemText primary="Get Team Join Link" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button key="projects_schedule">
                        <ListItemIcon>
                            <ListItemIcon><Icon>schedule</Icon></ListItemIcon>
                            <ListItemText primary="Edit My Schedule" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button key="projects_button">
                        <ListItemIcon>
                            <ListItemIcon><Icon>folder</Icon></ListItemIcon>
                            <ListItemText primary="View Projects" />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Dialog>
        );
    }
}

class ButtonAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            drawer: false,
            dialog: false
        };
    }

    toggleDrawer(forceVal = null){
        this.setState({
            drawer: (forceVal === null)? !this.state.drawer : forceVal
        });
    }

    toggleDialog(forceVal = null) {
        this.setState({
            dialog: (forceVal === null) ? !this.state.dialog : forceVal
        });
        console.log(this.state.dialog);
        if (this.state.dialog){
            this.toggleDrawer(false);
        }
    }

    render(){
        const { classes } = this.props;
        const sideList = (
            <div>
                <Typography variant="h6" className={classes.list_title}>
                    {this.props.teamName}
                </Typography>
                <List>
                    <ListItem button key="join_link" onClick={()=>this.toggleDialog(true)}>
                        <ListItemIcon>
                            <ListItemIcon><Icon>share</Icon></ListItemIcon>
                            <ListItemText primary="Get Team Join Link"/>
                        </ListItemIcon>
                    </ListItem>
                    <Divider/>
                    <ListItem button key="projects_schedule">
                        <ListItemIcon>
                            <ListItemIcon><Icon>schedule</Icon></ListItemIcon>
                            <ListItemText primary="Edit My Schedule" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button key="projects_button" onClick={() => this.toggleDialog(true)} >
                        <ListItemIcon>
                            <ListItemIcon><Icon>folder</Icon></ListItemIcon>
                            <ListItemText primary="View Projects" />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer()}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            {this.props.title}
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={this.state.drawer} onClose={() => this.toggleDrawer(false)}>
                    {sideList}
                </Drawer>
                <ProjectsDialog open={this.state.dialog} onClose={()=>this.toggleDialog(false)}/>
            </div>
        )
    }
}

export default withStyles(styles)(ButtonAppBar);