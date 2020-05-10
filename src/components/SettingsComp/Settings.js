import React, { useState, useEffect } from 'react';
import { Grid, Box, withStyles, Avatar, makeStyles, Paper, TextField, Switch, IconButton} from '@material-ui/core';
import './settings.css'
import { useForm } from '../customHook/useForm'
import Img from "./12.jpg";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { green, deepOrange } from '@material-ui/core/colors';
import AllNavBar from "../NavBar/allNavBar";
const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:30
    },
    rounded: {
        color: '#fff',
        backgroundColor: 'rgba(49, 87, 63,0.9)',
        width: '12rem',
        height: '3rem',
        padding: 10
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));
const CssTextField = withStyles({
    root: {
      marginBottom:"1rem",
      '& label.Mui-focused': {
        color: 'rgba(49, 87, 63,0.7)',
      },
      '&:hover': {
        color: 'rgba(49, 87, 63,0.7)',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(49, 87, 63,0.7)',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'rgba(49, 87, 63,0.7)',
        },
      },
    },
  })(TextField);
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
                backgroundColor: 'rgba(52, 116, 76, 0.7)',
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




// Main Funcation Starts Here

const Settings = () => {
    const classes = useStyles();
    const [values, handleFormChange] = useForm({
        minBalAmt: '',
        freeDelDist: '',
        delCostPerKm: '',
        foodPackCost: '',
        maxDelDist: '',
        tax: '',
    })
    const [options, setOptions] = useState({
        COD: true,
        OnlinePay: true,
        HomeDel: true,
        Takeaway: true,
    });
    const [image, setImage] = useState([])


    const handleChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };
    const handleAddImage = (event) => {
        setImage(image.concat(URL.createObjectURL(event.target.files[0])))
    }
    useEffect(() => {

    }, [values])

    return (
       
        <div className={"root"}>
             
            <Grid container>
           
                <Grid item xs={12} md={6}>
                <AllNavBar/>
                    <Paper className={"formPaper"}>
                        <div>
                            <form className="form">
                                <div className="formItem">
                                    <label className="formtextStyle">Minimum Bill Amount</label>
                                    <CssTextField
                                        className="forminput"
                                        id="outlined-basic-normal"
                                        variant="outlined"
                                        size="small"
                                        name="minBalAmt"
                                        value={values.minBalAmt}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="formItem">
                                    <label className="formtextStyle">Free Delivery Distance</label>
                                    <CssTextField
                                        className="forminput"
                                        id="outlined-basic-normal"
                                        variant="outlined"
                                        size="small"
                                        name="freeDelDist"
                                        value={values.freeDelDist}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="formItem">
                                    <label className="formtextStyle">Delivery Cost per Km</label>
                                    <CssTextField
                                        className="forminput"
                                        id="outlined-basic-normal"
                                        variant="outlined"
                                        size="small"
                                        name="delCostPerKm"
                                        value={values.delCostPerKm}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="formItem">
                                    <label className="formtextStyle">Food Packaging Cost</label>
                                    <CssTextField
                                        className="forminput"
                                        id="outlined-basic-normal"
                                        variant="outlined"
                                        size="small"
                                        name="foodPackCost"
                                        value={values.foodPackCost}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="formItem">
                                    <label className="formtextStyle">Maximum Delivery Distance(in Km)</label>
                                    <CssTextField
                                        className="forminput"
                                        id="outlined-basic-normal"
                                        variant="outlined"
                                        size="small"
                                        name="maxDelDist"
                                        value={values.maxDelDist}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="formItem">
                                    <label className="formtextStyle">Tax</label>
                                    <CssTextField
                                        className="forminput"
                                        id="outlined-basic-normal"
                                        variant="outlined"
                                        size="small"
                                        name="tax"
                                        value={values.tax}
                                        onChange={handleFormChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper className="formPaper">
                        <div>
                            <div>
                                <p className="title">Payment Options</p>

                            </div>
                            <div className="switch" style={
                                options.COD ? { borderColor: "rgba(53, 184, 70, 0.5)" } :
                                    { borderColor: "rgba(255, 60, 0, 0.5)" }}>
                                <div>
                                    <p className="leftTextStyle" style={options.COD ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>Cash On Delivery</p>
                                </div>
                                <div className="rightcontainer">
                                    <p className="textStyle" style={options.COD ? { color: "darkgreen" } :{ color: "rgba(255, 60, 0, 1)" }}>{options.COD ? 'YES' : 'NO'}</p>
                                </div>
                                <div >
                                    <form noValidate autoComplete="off">
                                        <IOSSwitch
                                            checked={options.COD}
                                            onChange={handleChange}
                                            name="COD"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </form>
                                </div>
                            </div>

                            <div className="switch" style={
                                options.OnlinePay ? { borderColor: "rgba(53, 184, 70, 0.5)" } :
                                    { borderColor: "rgba(255, 60, 0, 0.5)" }}>
                                <div>
                                    <p className="leftTextStyle" style={options.OnlinePay ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>Online Payment</p>
                                </div>
                                <div className="rightcontainer">
                                    <p className="textStyle" style={options.OnlinePay ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>{options.OnlinePay ? 'YES' : 'NO'}</p>
                                </div>
                                <div >
                                    <form noValidate autoComplete="off">
                                        <IOSSwitch
                                            checked={options.OnlinePay}
                                            onChange={handleChange}
                                            name="OnlinePay"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </Paper>
                    <Paper className="formPaper">
                        <div>
                            <div>
                                <p className="title">Delivery Options</p>

                            </div>
                            <div className="switch" style={
                                options.HomeDel ? { borderColor: "rgba(53, 184, 70, 0.5)" } :
                                    { borderColor: "rgba(255, 60, 0, 0.5)" }}>
                                <div>
                                    <p className="leftTextStyle" style={options.HomeDel ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>Home Delivery</p>
                                </div>
                                <div className="rightcontainer">
                                    <p className="textStyle" style={options.HomeDel ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>{options.HomeDel ? 'YES' : 'NO'}</p>
                                </div>
                                <div >
                                    <form noValidate autoComplete="off">
                                        <IOSSwitch
                                            checked={options.HomeDel}
                                            onChange={handleChange}
                                            name="HomeDel"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </form>
                                </div>
                            </div>

                            <div className="switch" style={
                                options.Takeaway ? { borderColor: "rgba(53, 184, 70, 0.5)" } :
                                    { borderColor: "rgba(255, 60, 0, 0.5)" }}>
                                <div>
                                    <p className="leftTextStyle" style={options.Takeaway ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>Takeaway</p>
                                </div>
                                <div className="rightcontainer">
                                    <p className="textStyle" style={options.Takeaway ? { color: "darkgreen" } :{ color: "rgb(255, 60, 0)" }}>{options.Takeaway ? 'YES' : 'NO'}</p>
                                </div>
                                <div >
                                    <form noValidate autoComplete="off">
                                        <IOSSwitch
                                            checked={options.Takeaway}
                                            onChange={handleChange}
                                            name="Takeaway"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper className="formPaper">
                        <p className="title" style={{ textAlign: "left", paddingLeft: 10 }}>Banner Image Uplaod</p>
                        <div className="imgContainer">
                            <div className="imageBtn">
                                <input accept="image/*" style={{ display: "none" }} id="icon-button-file" type="file" onChange={handleAddImage} />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" className="img" aria-label="upload picture" component="span">
                                        <PhotoCamera  style={{ fontSize:'4rem', color: 'rgba(49, 87, 63,0.7)' }}/>
                                    </IconButton>
                                </label>
                            </div>
                            {
                                image === null ? null :
                                    image.map(image => {
                                        return (
                                            <img src={image} className="imageBtn" />
                                        );
                                    })
                            }
                        </div>

                    </Paper>
                    <Box
                        color="rgb(233, 233, 231)"
                        p={2}
                        position="fixed"
                        top="90%"
                        right="0%"
                        zIndex="tooltip"
                        display="flex"
                    >
                        <Avatar variant="rounded" className={classes.rounded}>
                            <MailOutlineIcon style={{ fontSize: 35 }} />  18000 Left
                                </Avatar>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Settings;