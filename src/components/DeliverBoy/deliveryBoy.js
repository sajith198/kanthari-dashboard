import React, { Component } from "react";
import AllNavBar from "../NavBar/allNavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

class DeliveryBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  addDeliveryBoy = (boyData) => {
    console.log(boyData);
  };
  updateDeliveryBoy = (boyData, oldData) => {
    console.log(oldData + "...." + boyData);
  };
  removeBoy = (boyData) => {
    console.log(boyData);
  };
  render() {
    const tableColumnsHeaders = [
      {
        title: "Order Id",
        field: "orderId",
      },
      { title: "First Name", field: "dFirstName" },
      { title: "Last Name", field: "dLastName" },
      { title: "Mobile Number", field: "dMobileNumber" },
      { title: "Status", field: "dstatus" },
      { title: "Username", field: "dUsername" },
      { title: "Password", field: "dPassword" },
    ];
    return (
      <React.Fragment>
        <div className="mb-5">
          <AllNavBar>
          <div className="container-fluid mainBody table-responsive">
          <MaterialTable
            title="Delivery Boy"
            columns={tableColumnsHeaders}
            data={this.state.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      data.push(newData);
                      this.addDeliveryBoy(newData);
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
                      this.updateDeliveryBoy(newData, oldData);
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
                      this.removeBoy(oldData);
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

export default withStyles()(DeliveryBoy);
