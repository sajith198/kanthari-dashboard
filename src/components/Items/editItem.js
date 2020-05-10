import React, {useState} from 'react';
import './Item.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor:"rgba(49, 87, 63,0.7)",
    '&:hover': {
      backgroundColor: "rgba(49, 87, 63,0.7)",
    },
  },
}))(Button);
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  const GreenRadio = withStyles({
    root: {
      color: 'rgba(49, 87, 63,0.7)',
      '&$checked': {
        color: 'rgba(49, 87, 63,0.7)',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const CssTextField = withStyles({
    root: {
      marginBottom:"1rem",
      '& label.Mui-focused': {
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

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));



// Main Function Starts Here


const EditItem =( props ) => {
  
    const classes = useStyles();
    const { onClose, open,data={}} = props;
    const [dataVal,SetDataVal] = useState(data)
    console.log(data)
    const handleClose = () => {
        onClose(selectedValue);
      };
    
      const handleListItemClick = (value) => {
        onClose(value);
      };
      const [selectedValue, setSelectedValue] = React.useState('a');

      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

      const [image, setImage] = useState([])
      const handleAddImage = (event) => {
      setImage(image.concat(URL.createObjectURL(event.target.files[0])))
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
        <DialogContent>
        <CssTextField
          size="small" 
          id="outlined-select-currency"
          select
          label="Select Category"
          variant="outlined"
          fullWidth
          value={dataVal.cat}
        >
          {currencies.map((option,index) => (
            <MenuItem key={index} value={dataVal.cat}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField>
          <CssTextField
           size="small" 
            id="name"
            label="Item Name"
            type="text"
            variant="outlined"
            defaultValue={dataVal.name}
            fullWidth
          />
          <CssTextField
          size="small" 
          id="outlined-select-currency"
          select
          label="Select"
          variant="outlined"
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField>
        <CssTextField
        size="small" 
            margin="contained"
            id="price"
            label="Price"
            type="text"
            variant="outlined"
            fullWidth
          />
          <label>Type:</label>
          <GreenRadio
        checked={selectedValue === 'D'}
        onChange={handleChange}
        value="D"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
      <label>Vegetarian:</label>
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
      <label>Non-vegetarian</label>
      <div></div>
      <CssTextField
      size="small" 
          id="outlined-multiline-flexible"
          label="Item Description"
          multiline
          variant="outlined"
          rows={4}
          fullWidth
        />
        <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleAddImage}
      />
      <label htmlFor="contained-button-file">
        <ColorButton variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
          Upload
        </ColorButton>
      </label>
      <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
      {
                                image === null ? null :
                                    image.map(image => {
                                        return (
                                            <img src={image} className="msg"/>
                                         
                                            
                                        );
                                    })
                            }
                             </div>
      </div>
        </DialogContent>
        <DialogActions>
          <ColorButton onClick={handleClose} color="primary" variant="contained">
            Cancel
          </ColorButton>
          <ColorButton onClick={handleClose} color="primary" variant="contained">
            Add
          </ColorButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditItem;