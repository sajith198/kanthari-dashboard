import React, { Component } from "react";
import AllNavBar from "../NavBar/allNavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  addOffers = (boyData) => {
    console.log(boyData);
  };
  updateOffers = (boyData, oldData) => {
    console.log(oldData + "...." + boyData);
  };
  removeOffers = (boyData) => {
    console.log(boyData);
  };
  render() {
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
      { title: "Name", field: "name" },
      { title: "price", field: "discount", type: "numeric" },
      {
        title: "Type",
        field: "type",
      },
      { title: "Description", field: "minAmount" },
      { title: "Status", field: "status" },
    ];
    return (
      <React.Fragment>
        <div className="mb-5">
          <AllNavBar>
          <div className="container mainBody table-responsive">
          <MaterialTable
            title="Offers"
            columns={tableColumnsHeaders}
            data={this.state.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      data.push(newData);
                      this.addOffers(newData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      this.updateOffers(newData, oldData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = this.state.data;
                      const index = data.indexOf(oldData);
                      this.removeOffers(oldData);
                      data.splice(index, 1);
                      this.setState({ data }, () => resolve());
                    }
                    resolve();
                  }, 1000);
                }),
            }}
            options={{
              actionsColumnIndex: -1,
            }}
          />
        </div>
          </AllNavBar>
        </div>
       
      </React.Fragment>
    );
  }
}

export default withStyles()(Offers);
