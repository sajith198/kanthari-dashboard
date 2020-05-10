import React, { Component } from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

const drawerWidth = 120;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:"#002B49"
  },
  appBar: {
    
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:"#002B49"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#002B49"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

class AllNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, shop: true, shopStatus: true };
  }

  shopStatusChange = (event) => {
    event.preventDefault();
    console.log(event.target.name);
  };

  sidebarArrayTop = [
    <Link className="text-dark font-weight-bold" to="/dashboard">
      Dashboard
    </Link>,
    <FormControlLabel
      value="Shop"
      control={<Switch color="primary" />}
      label="Shop Open"
      name="shopStatusButton"
      onChange={this.shopStatusChange}
      labelPlacement="start"
    />,
    <Link className="text-dark  font-weight-bold" to="/allorders">
      <p>All Orders</p>
    </Link>,
    <Link className="text-dark font-weight-bold" to="/deliveryboy">
      Delivery Boy
    </Link>,
    <Link className="text-dark font-weight-bold" to="/category">
      Categories
    </Link>,
    <Link className="text-dark font-weight-bold" to="/items">
      Items
    </Link>,
    <Link className="text-dark font-weight-bold" to="/couponcode">
      Coupon Code
    </Link>,
    <Link className="text-dark font-weight-bold" to="/offers">
      Today's Offer
    </Link>,
  ];
  sidebarArrayBottom = [
    <Link className="text-dark font-weight-bold" to="/settings">
      Settings
    </Link>,
    <Link className="text-dark font-weight-bold" to="/">
      LogOut
    </Link>,
  ];

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const theme = "rtl";
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className="${clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}"
          style={{backgroundColor:"#002B49"}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(
                classes.menuButton,
                this.state.open && classes.hide
              )}
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
        <Drawer
          style={{backgroundColor:"#002B49"}}
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.sidebarArrayTop.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {this.sidebarArrayBottom.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(AllNavBar);
