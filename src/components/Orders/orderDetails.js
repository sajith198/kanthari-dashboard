import React, { Component } from "react";
import AllNavBar from "../NavBar/allNavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  content: {
    flex: "1 0 auto",
  },
  table: {
    minWidth: 700,
  },
}));

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: this.props.match.params.orderId,
      orderData: {},
      form: { orderStatus: "", deliverBoy: "" },
      deliverBoyDetails: [],
      itemList: [],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let { form } = this.state;
    form[name] = value;
    this.setState({ form: form });
  };
  componentDidMount() {
    // fetch oder details with orderId
  }
  ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className="mb-5">
          <AllNavBar></AllNavBar>
        </div>
        <div className="container mainBody ">
          <div
            className="card"
            style={{
              background:
                "linear-gradient(to top right,  #ff6600 10%, #ffff66   76%)",
            }}
          >
            <h5
              className="card-header text-left text-light bg-dark"
              style={{ fontFamily: "Lucida Console Courier monospace" }}
            >
              Order Id :- {this.state.orderId}
            </h5>
            <div className="card-body">
              <div className="container ">
                <div className="row ">
                  <div className="col-lg-6 col-xs-12 col-sm-12 shadow p-3">
                    <h5 className="card-title text-left">Address</h5>
                    <div>
                      <p
                        className="card-text text-left ml-4  text-uppercase"
                        style={{
                          fontFamily: "Lucida Console Courier monospace",
                        }}
                      >
                        User Name
                      </p>
                      <p
                        className="card-text text-left ml-4 text-uppercase"
                        style={{
                          fontFamily: "Lucida Console Courier monospace",
                        }}
                      >
                        Address Line 1 dshajjjjjjgskhsgdhhdhdh
                      </p>
                      <p
                        className="card-text text-left ml-4 text-uppercase"
                        style={{
                          fontFamily: "Lucida Console Courier monospace",
                        }}
                      >
                        Address Line 2
                      </p>
                      <p
                        className="card-text text-left ml-4 text-uppercase"
                        style={{
                          fontFamily: "Lucida Console Courier monospace",
                        }}
                      >
                        Address Line 3
                      </p>
                      <p
                        className="card-text text-left ml-4 text-uppercase"
                        style={{
                          fontFamily: "Lucida Console Courier monospace",
                        }}
                      >
                        Address Line 4
                      </p>
                      <p
                        className="card-text text-left ml-4"
                        style={{
                          fontFamily: "Lucida Console Courier monospace",
                        }}
                      >
                        Mobile Number
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12 shadow p-3">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="orderStatus" className="form-label">
                          <h5>
                            <b>Order Status</b>
                          </h5>
                        </label>
                        <select
                          className="form-control"
                          name="orderStatus"
                          id="orderStatus"
                          onChange={this.handleChange}
                        >
                          <option value="ordered" key="1" selected>
                            Ordered
                          </option>
                          <option value="delivered" key="2">
                            Delivered
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="deliverBoy" className="">
                          <h5>
                            <b>Assigin Delivery Boy</b>
                          </h5>
                        </label>
                        <select
                          className="form-control"
                          name="deliverBoy"
                          id="deliverBoy"
                          onChange={this.handleChange}
                        >
                          <option value="sam" key="1" selected>
                            Sam
                          </option>
                          <option value="John" key="2">
                            Delivered
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-outline-dark">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <br />

              <div className=" table-responsive shadow-lg m-1">
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="spanning table">
                    <TableHead className="bg-green">
                      <TableRow>
                        <TableCell
                          align="center"
                          colSpan={5}
                          className="text-uppercase"
                        >
                          <b>Order Item Details</b>
                        </TableCell>
                        {/* <TableCell align="right">Price</TableCell> */}
                      </TableRow>
                      <TableRow className="bg-dark shadow">
                        <TableCell className="text-light">Sl. No</TableCell>
                        <TableCell align="right" className="text-light">
                          Category
                        </TableCell>
                        <TableCell align="right" className="text-light">
                          Item Name
                        </TableCell>
                        <TableCell align="right" className="text-light">
                          Quantity
                        </TableCell>
                        <TableCell align="right" className="text-light">
                          Price
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.itemList.map((row) => (
                        <TableRow key={row.itemName}>
                          <TableCell>{row.slno}</TableCell>
                          <TableCell align="right">{row.Category}</TableCell>
                          <TableCell align="right">{row.itemName}</TableCell>
                          <TableCell align="right">{row.quantity}</TableCell>
                          <TableCell align="right">
                            {this.ccyFormat(row.price)}
                          </TableCell>
                        </TableRow>
                      ))}

                      <TableRow>
                        <TableCell rowSpan={4} />
                        <TableCell colSpan={3}>Subtotal</TableCell>
                        <TableCell align="right">
                          0{/* {this.ccyFormat(invoiceSubtotal)} */}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3}>Packing Cost</TableCell>
                        <TableCell align="right">10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3}>Delivery Charge</TableCell>
                        <TableCell align="right">10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell align="right">100</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            {/*card body end*/}
            <div className="card-footer">
              <div className="container m-2 shadow-lg bg-light">
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12 mt-3 mb-2">
                    <b>Order Type: this.state.orderData.type</b>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12 mt-2 mb-1">
                    <div>
                      <b>Payment mode: this.state.orderData.mode</b>
                    </div>
                    <b>Payment status: this.state.orderData.pstatus</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(OrderDetails);
