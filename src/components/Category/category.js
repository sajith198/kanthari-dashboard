import React, { Component } from "react";
import AllNavBar from '../NavBar/allNavBar';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MaterialTable, { MTableToolbar } from "material-table";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          imageUrl: require("../../assets/image/gitzberrylogo002.png"),
          cName: "Chicken",
          cStatus: "Available",
        },
      ],
      openDialog: false,
    };
  }

  addCategory = (newData) => {
    this.setState({ openDialog: !this.state.openDialog });
  };
  handleClose = () => {
    this.setState({ openDialog: false });
  };
  updateCategory = (newData, oldData) => {};

  removeCategory = (oldData) => {};

  render() {
    const { classes } = this.props;
    const tableColumnsHeaders = [
      {
        title: "Image",
        field: "imageUrl",
        render: (rowData) => (
          <img
            src={rowData.imageUrl}
            style={{ width: 40, borderRadius: "50%" }}
          />
        ),
      },
      { title: "Name", field: "cName" },
      { title: "Status", field: "cStatus" },
    ];

    const body = (
      <div className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    );

    return (
      <React.Fragment>
        <div className="mb-5">
          <AllNavBar></AllNavBar>
        </div>
        <div className="container mainBody">
          <div className="table-responsive">
            <MaterialTable
              title="Category"
              columns={tableColumnsHeaders}
              data={this.state.data}
              actions={[
                {
                  icon: "add",
                  tooltip: "Add User",
                  isFreeAction: true,
                  onClick: (event) => this.handleClose,
                },
              ]}
              editable={{
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = this.state.data;
                        const index = data.indexOf(oldData);
                        this.removeCategory(oldData);
                        data.splice(index, 1);
                        this.setState({ data }, () => resolve());
                      }
                      resolve();
                    }, 1000);
                  }),
              }}
              options={{
                selection: true,
                actionsColumnIndex: -1,
              }}
            />
          </div>
        </div>
        {/* <Modal
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal> */}
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(Category);
