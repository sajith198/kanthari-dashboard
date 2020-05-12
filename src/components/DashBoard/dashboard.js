import React, { Component } from "react";
import AllNavBar from "../NavBar/allNavBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MaterialTable from "material-table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title:{
    textAlign:"center",
    alignItems:"center"
  }
}));

class Dashboard extends Component {
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
      ],
    };
  }

  componentDidMount() {
    //axios call and fill state.dataRows
  }

  handleTableRowClick = (rowData) => {
    console.log(rowData);
    this.props.history.push("/dashboard/orderdetail/" + rowData.orderId);
  };

  render() {
    const { classes } = this.props;
    const tableColumnsHeaders = [
      {
        title: "Order Id",
        field: "orderId",
        // cellStyle: { backgroundColor: "#01579b", color: "#FFF" },
      },
      { title: "Customer Name", field: "customerName" },
      { title: "Order Type", field: "orderType" },
      { title: "Order Time", field: "orderTime" },
      { title: "Payment Mode", field: "paymentMode" },
    ];
    return (
      
        <AllNavBar>
        <div className="container-fluid mainBody m-3 p-1">
          <Card className={classes.root}>
            <CardContent className="container-fluid" id="mainBox">
              <Typography gutterBottom variant="h4" component="h2" className="text-default">
                Today's Order Summary
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                m={2}
                pt={5}
                p={0}
                className="row row-cols-12 d-flex justify-content-center"
              >
                <Box
                  height="10rem"
                  width="25%"
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                  id="todayBox"
                  className="col-12 col-md-8 col-sm-12 col-lg-2  border border-info rounded shadow my-4 mr-4"
                >
                  <Box
                    position="absolute"
                    top="-20%"
                    left="15%"
                    height="5rem"
                    width="70%"
                    color="#fff"
                    className="border border-info rounded shadow bg-info"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"

                  >
                      <Typography
                    className={classes.title}
                    variant="h6"
                    component="h2"
                  >
                  Today's Orders
                  </Typography>
                  </Box>
                  <Typography
                    className="text-info"
                    variant="h2"
                    component="h2"
                  >
                    32
                  </Typography>
                
                </Box>

                <Box
                  height="10rem"
                  width="7rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                  id="todayBox"
                  className="col-12 col-md-8 col-sm-12 col-lg-2 border border-warning rounded shadow my-4 mr-4"
                >
                  <Box
                    position="absolute"
                    top="-20%"
                    left="15%"
                    height="5rem"
                    width="70%"
                    color="#fff"
                    className="border rounded shadow bg-warning"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"

                  >
                      <Typography
                    className={classes.title}
                    variant="h6"
                    component="h2"
                  >
                  Processing Orders
                  </Typography>
                  </Box>
                  <Typography
                    className="text-warning"
                    variant="h2"
                    component="h2"
                  >
                    32
                  </Typography>
                
                </Box>


                <Box
                  height="10rem"
                  width="21%"
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                  id="todayBox"
                  className="col-12 col-md-8 col-sm-12 col-lg-2 border border-success rounded shadow my-4 mr-4"
                >
                  <Box
                    position="absolute"
                    top="-20%"
                    left="15%"
                    height="5rem"
                    width="70%"
                    color="#fff"
                    className="border rounded shadow bg-success"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"

                  >
                      <Typography
                    className={classes.title}
                    variant="h6"
                    component="h2"
                  >
                  Completed Orders
                  </Typography>
                  </Box>
                  <Typography
                    className="text-success"
                    variant="h2"
                    component="h2"
                  >
                    32
                  </Typography>
                
                </Box>

                <Box
                  height="10rem"
                  width="25%"
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                  id="todayBox"
                  className="col-12 col-md-8 col-sm-12 col-lg-2 border border-danger rounded shadow my-4 mr-4"
                >
                  <Box
                    position="absolute"
                    top="-20%"
                    left="15%"
                    height="5rem"
                    width="70%"
                    color="#fff"
                    className="border rounded shadow bg-danger"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"

                  >
                      <Typography
                    className={classes.title}
                    variant="h6"
                    component="h2"
                  >
                    &nbsp;Canceled &nbsp; Orders
                  </Typography>
                  </Box>
                  <Typography
                    className="text-danger"
                    variant="h2"
                    component="h2"
                  >
                    32
                  </Typography>
                
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end" pr={2}>
                <Typography className="text-dark" variant="h5" component="h2">
                  Total Orders: 67
                </Typography>
              </Box>
            </CardContent>
          </Card>
        
        <div className="container mt-5 mb-5">
          <div>
            <div className="col-12 table-responsive table-hover">
              <MaterialTable
                title="New Orders"
                columns={tableColumnsHeaders}
                data={this.state.dataRows}
                onRowClick={(event, rowData, togglePanel) =>
                  this.handleTableRowClick(rowData)
                }
                options={{
                  headerStyle: {
                    backgroundColor: "#01579b",
                    color: "#FFF",
                  },
                  rowStyle:{
                    textAlign:"center"
                  }
                }}
              />
            </div>
          </div>
        </div>
        </div>
          </AllNavBar>
       
    );
  }
}

export default withStyles(useStyles)(Dashboard);
