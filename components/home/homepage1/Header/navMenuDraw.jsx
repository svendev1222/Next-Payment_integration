import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = "50%!important";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // background: '#bcd2d6;',
    background: 'none', 
    // backgroundColor: "#7eaaf8!important"
  },
  drawerPaper: {
    background: 'rgba(0,0,0, 0.8)',
    padding: "0 30px",
    color: 'white',
  },  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  sel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  clsIcn: {
    color: 'white',
    left: 'auto '
  },
  btn: {
    fontSize: "1.2em",
    color: 'white  '
  },
}));

const NavMenuDraw = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
        style={{color:"white"}}
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        // className={clsx(classes.menuButton, open && classes.hide)}
        >
        <MenuIcon style={{fontSize:30}} />
      </IconButton>
      <Drawer
        className={classes.drawer}
        // style={{ opacity: "0.6!important", backgroundColor: "#7eaaf8!important", }}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.sel}>
          <IconButton className={classes.clsIcn} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>  
        </div>
        <Divider />
        <List>
          {['Concerts', 'Artists', 'Venues'].map((text, i) => (
            <ListItem  key={i} button >
              <ListItemText className={classes.btn} primary={text} classes={{primary:classes.btn}} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
export default NavMenuDraw;