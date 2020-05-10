
import React ,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid,Button, Box, Avatar, TextField, Switch, IconButton} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Item.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import PostAddIcon from '@material-ui/icons/PostAdd';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddItem from './AddItem';
import EditItem from './editItem';
import AllNavBar from '../NavBar/allNavBar'
import MaterialTable, { MTableToolbar } from 'material-table';




const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor:"#01579b",
    '&:hover': {
      backgroundColor: "#fff",
      border:1,
      borderColor:"#01579b",
      color: "#01579b",
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(49, 87, 63,0.7)',
      backgroundColor:""
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
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'Arial',
        'sans-serif',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        // borderColor: 'rgba(49, 87, 63,0.7)',
        boxShadow: '0 0 0 0.1rem rgba(49, 87, 63,0.7)',
      },
    },
  }))(InputBase);

  
  const useStyles = makeStyles((theme) =>({
    root:{
      marginTop:'10vh',
      backgroundColor: '#F9FBFD'
    },
    table: {
      minWidth: 400,
    },
    button: {
        margin: theme.spacing(1),
      },
  }));


// Main Funcation Starts Here
const Items = () => {

    const classes = useStyles();



    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [dataValues, setDataValues] = useState();

    const handleAddOpen = () => {
        setOpenAdd(true);
    };

    const handleAddClose = (value) => {
        setOpenAdd(false);
    };
    const handleEditOpen = ( data ) => {
      setOpenEdit(true);
      setDataValues(data)
  };

  const handleEditClose = (value) => {
      setOpenEdit(false);
  };
  const deleteIcon =
  (<IconButton onClick={console.log("delete")}>
    <DeleteIcon style={{ color: 'rgba(49, 87, 63,0.7)' }} />
  </IconButton>
  );

  const editIcon = (
    <IconButton onClick={handleEditOpen}>
      <EditIcon style={{ color: 'rgba(49, 87, 63,0.7)' }} />
    </IconButton>
  );

  const tableColumn=[
    { title: 'Icon', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
    { title: 'Name', field: 'name' },
    { title: 'Category', field: 'cat' },
    { title: 'Price', field: 'price' },
    { title: 'Type', field: 'type' },
    { title: 'Description', field: 'desc' },
    { title: 'Status', field: 'status' },
  ]
  const tableData = [
    { name: 'biriyani',cat:'chicken', price: 'Baran',type:'Non-Veg', desc: 1987, status: 'Available', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    { name: 'biriyani',cat:'chicken', price: 'Baran',type:'Non-Veg', desc: 1987, status: 'Available', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    { name: 'biriyani',cat:'chicken', price: 'Baran',type:'Non-Veg', desc: 1987, status: 'Available', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    { name: 'biriyani',cat:'chicken', price: 'Baran',type:'Non-Veg', desc: 1987, status: 'Available', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    { name: 'biriyani',cat:'chicken', price: 'Baran',type:'Non-Veg', desc: 1987, status: 'Available', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
    { name: 'biriyani',cat:'chicken', price: 'Baran',type:'Non-Veg', desc: 1987, status: 'Available', imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
  ]
    return(
        <div className={classes.root}>
         <AllNavBar/>
        <Grid  xs={12} md={12} >
       
            <Grid item xs={12}>
           
                <div
                    style={{
                        display:"flex",
                        flexDirection:"row-reverse",
                        padding:20,
                    }}>
                       
                         <ColorButton
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{fontSize:16,padding:"auto"}}
                            className={classes.button}
                            startIcon={<PostAddIcon style={{fontSize:33}} />}
                            onClick={handleAddOpen}
                        >
                            Add Item
                        </ColorButton>
                        <AddItem  open={openAdd} onClose={handleAddClose} />
                        <EditItem  open={openEdit} data={dataValues} onClose={handleEditClose} />
                        </div>
            </Grid>
            <Grid item md={12}>
                    <Paper style={{margin:"2%"}}>
                        <div className="switch">
                            <CssTextField
                              size="small" 
                             margin="contained"
                             id="price"
                             label="Search by Name"
                             type="text"
                             variant="outlined"
                             type="search"
                            style={{flexGrow:0.2}}
                            />

                            <NativeSelect
                            style={{flexGrow:0.2}}
                            id="demo-customized-select-native"
                            // value={age}
                            // onChange={handleChange}
                            input={<BootstrapInput />}
                            >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                            </NativeSelect>
      
                         </div>
                        </Paper>
                             <div className=" container mt-5 mb-5">
                               <div className="table-hover table-striped table-responsive">
                               <MaterialTable
                                title="Items"
                                columns={tableColumn}
                                data={tableData} 
                                actions={[
                                  {
                                    icon: 'save',
                                    tooltip: 'Save User',
                                    // onClick: (event, rowData) => alert("You saved " + JSON.stringify(rowData))
                                    onClick: (event,rowData) => handleEditOpen(rowData)
                                  },
                                  rowData => ({
                                    icon: 'delete',
                                    tooltip: 'Delete User',
                                    // onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                                    disabled: rowData.birthYear < 2000
                                  })
                                ]}
                                options={{
                                  actionsColumnIndex: -1,
                                  search: false,
                                  exportButton: true,
                                  headerStyle: {
                                    backgroundColor: '#01579b',
                                    color: '#FFF',
                                    padding:20
                                  }
                                }}       
                              />
                               </div>
                              
                        </div>
            </Grid>
        </Grid>
        </div>
    );
}

export default Items;




