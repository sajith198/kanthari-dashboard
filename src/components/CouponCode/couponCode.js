import React, { Component } from "react";
import AllNavBar from "../NavBar/allNavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

class CouponCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  addCoupon = (boyData) => {
    console.log(boyData);
  };
  updateCoupon = (boyData, oldData) => {
    console.log(oldData + "...." + boyData);
  };
  removeCoupon = (boyData) => {
    console.log(boyData);
  };
  render() {
    const tableColumnsHeaders = [
      { title: "Code", field: "code" },
      { title: "Discount %", field: "discount", type: "numeric" },
      {
        title: "Maximum Discount",
        field: "maxDiscount",
        type: "numeric",
      },
      { title: "Min Bill Amount", field: "minAmount", type: "numeric" },
    ];
    return (
      <React.Fragment>
        <div className="mb-5">
          <AllNavBar></AllNavBar>
        </div>
        <div className="container mainBody table-responsive">
          <MaterialTable
            title="Coupons"
            columns={tableColumnsHeaders}
            data={this.state.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      data.push(newData);
                      this.addCoupon(newData);
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
                      this.updateCoupon(newData, oldData);
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
                      this.removeCoupon(oldData);
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
      </React.Fragment>
    );
  }
}

export default withStyles()(CouponCode);
