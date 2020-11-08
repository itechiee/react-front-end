import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
// import { useTheme } from '@material-ui/core/styles';
// import useStyles from './css/theme';
import PeopleIcon from '@material-ui/icons/People';
import logo from '../assets/img/logo.png';
// import '../assets/css/style.css';

export default function Sidebar(props) {
  const classes = props.classes;// useStyles();
  const theme = props.theme; // useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Marsa
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar + ' navbar-wrap'}>
          <div className="logo-wrap">
            <img src={logo} width="20" height="20" />
            <p className="logo-text"> arsa </p>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div className="nav-link">
            <NavLink  to="/users" color="inherit" >
              <ListItem button>
                <ListItemIcon> <PeopleIcon /> </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </NavLink >

            <NavLink  to="test" color="inherit" >
              <ListItem button>
                <ListItemIcon> <PeopleIcon /> </ListItemIcon>
                <ListItemText primary="Test Page" />
              </ListItem>
            </NavLink >
          </div>         
            
        </List>
      </Drawer>
      
    </div>
  );
}
