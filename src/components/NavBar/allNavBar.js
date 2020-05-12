import React, { Component, useState } from "react";
import clsx from "clsx";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FaceIcon from '@material-ui/icons/Face';
import CategoryIcon from '@material-ui/icons/Category';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Hidden from '@material-ui/core/Hidden';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const topListIcons =[
  <DashboardIcon/>,
  <AssignmentIcon/>,
  <FaceIcon/>,
  <CategoryIcon/>,
  <FormatListBulletedIcon/>,
  <AttachMoneyIcon/>,
  <LocalOfferIcon/>
]
const bottomListIcon =[
  <SettingsIcon/>,
  <ExitToAppIcon/>
]

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#5cb85c',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: 'rgba(52, 116, 76, 0.7)',
      border: '6px solid rgba(52, 116, 76, 0.7)',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const shopStatusChange = (event) => {
  event.preventDefault();
  console.log(event.target.name);
};

const sidebarArrayTop = [
  <Link className="text-muted font-weight-bold text-decoration-none"  to="/dashboard">
    Dashboard
  </Link>,

  <Link className="text-muted font-weight-bold text-decoration-none " to="/allorders">
    All Orders
  </Link>,
  <Link className="text-muted font-weight-bold text-decoration-none " to="/deliveryboy">
    Delivery Boy
  </Link>,
  <Link className="text-muted font-weight-bold text-decoration-none " to="/category">
    Categories
  </Link>,
  <Link className="text-muted font-weight-bold text-decoration-none " to="/items">
    Items
  </Link>,
  <Link className="text-muted font-weight-bold text-decoration-none" to="/couponcode">
    Coupon Code
  </Link>,
  <Link className="text-muted font-weight-bold text-decoration-none " to="/offers">
    Today's Offer
  </Link>,
]
const sidebarArrayBottom = [
  <Link className="text-muted font-weight-bold text-decoration-none" to="/settings">
    Settings
  </Link>,
  <Link className="text-muted font-weight-bold text-decoration-none" to="/">
    LogOut
  </Link>,
];

const AllNavBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event) => {
    setShopStatus(event.target.checked);
  };
  const [shopStatus, setShopStatus] = useState(true)

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <Typography className="text-dark font-weight-bold text-decoration-none" to="/">
          Shop &nbsp; {shopStatus ? "OPEN" : "CLOSED"}
        </Typography>
        <IOSSwitch
          name="open"
          checked={shopStatus}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
      <Divider />
      <List>
        {sidebarArrayTop.map((text, index) => (
          <ListItem button key={text}  style={{backgroundColor:"#FFFFFF"}}>
            <ListItemIcon>{topListIcons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sidebarArrayBottom.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{bottomListIcon[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "#002B49" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img
              alt="navbar brand logo"
              src={require("../../assets/image/gitzberrylogo002.png")}
              height="30vw"
              width="30vw"
              className="mr-2"
            />
          </IconButton>
          <Typography variant="h5" noWrap>
            Kanthari
            </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">

        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div classname={classes.content} style={{ width: "80%" }}>
        <div className={classes.toolbar} />
        {props.children}
      </div>
      <div className={classes.toolbar} />
    </div>
  );
}

export default withStyles(useStyles)(AllNavBar);
