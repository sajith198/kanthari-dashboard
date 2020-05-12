import React, { Component } from "react";
import AllNavBar from "../NavBar/allNavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

class AllOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRows: [
        {
          orderId: "O101",
          customerName: "A Customer",
          orderType: "Home Dev",
          orderTime: "3:00 Pm",
          paymentMode: "Cod",
        },
        {
          orderId: "O102",
          customerName: "B Customer",
          orderType: "Home Dev",
          orderTime: "7:00 Pm",
          paymentMode: "Cod",
        },
        {
          orderId: "O102",
          customerName: "B Customer",
          orderType: "Home Dev",
          orderTime: "7:00 Pm",
          paymentMode: "Cod",
        },
        {
          orderId: "O102",
          customerName: "B Customer",
          orderType: "Home Dev",
          orderTime: "7:00 Pm",
          paymentMode: "Cod",
        },
        {
          orderId: "O102",
          customerName: "B Customer",
          orderType: "Home Dev",
          orderTime: "7:00 Pm",
          paymentMode: "Cod",
        },
        {
          orderId: "O102",
          customerName: "B Customer",
          orderType: "Home Dev",
          orderTime: "7:00 Pm",
          paymentMode: "Cod",
        },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    const tableColumnsHeaders = [
      {
        title: "Order Id",
        field: "orderId",
      },
      { title: "Customer Name", field: "customerName" },
      { title: "Order Type", field: "orderType" },
      { title: "Order Time", field: "orderTime" },
      { title: "Order Date", field: "orderDate" },
      { title: "Payment Mode", field: "paymentMode" },
      { title: "Status", field: "status" },
    ];
    return (
      <React.Fragment>
        <div className="mb-5">
          <AllNavBar>
          <div className="container-fluid mainBody">
          <div className="container mt-5 ">
            <div className="row">
              <div className="col-12 table-responsive">
                <MaterialTable
                  title="New Orders"
                  className="shadow-lg"
                  columns={tableColumnsHeaders}
                  data={this.state.dataRows}
                  options={{
                    headerStyle: {
                      backgroundColor: "#000000",
                      color: "#FFF",
                    },
                    rowStyle: {
                      backgroundColor: "#ffffcc",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

          </AllNavBar>
        </div>
        
      </React.Fragment>
    );
  }
}

export default withStyles()(AllOrders);
