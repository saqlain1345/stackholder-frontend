import React,{useState} from 'react'
import './AddClient.css'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { addClient } from '../../../redux/clientReducer'
import {useDispatch} from 'react-redux'
import CustomTextField from '../../../uicomponents/CustomTextField/CustomTextField';


const AddClient = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const [formdata,setFormData] = useState({})
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFormData(prev => ({...prev, [name]: value}))
    console.log("ffffffffffffcustom", e.target.value);
  }
  const handleSwitchChange = (e) =>{
    const value = formdata.status === 'In Active' ? 'Active' : 'In Active'
    setFormData(prev => ({...prev, status: value}))
  }
  const handleSubmit = ()=>{
    dispatch(addClient(formdata))
  }

  return (
    <>
      <p className='contentHeading'>Add Client</p>

      {/* <div className='input'>
          <p>Name *</p>
          <input type="text"/>
      </div> */}
        <CustomTextField required label="Name" name="name" onChange={handleChange}/>
        <CustomTextField required label="Email" name="email" onChange={handleChange}/>
        <CustomTextField required label="Phone" name="contact" onChange={handleChange}/>
        <CustomTextField required label="Address" name="address" onChange={handleChange}/>
        {/* <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth size='small' margin="normal" required name="name" onChange={handleChange}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth size='small' margin="normal" required name="email" onChange={handleChange}/>
        <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth size='small' margin="normal" required name="phone" onChange={handleChange}/>
        <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth size='small' margin="normal" required multiline rows={2} name="address" onChange={handleChange}/> */}
        <FormControlLabel control={<Switch defaultChecked name="status" onChange={handleSwitchChange}/>} label="Status"/><br />
        <ColorButton variant="contained" fullWidth onClick={handleSubmit}>Add Client</ColorButton>
     
    </>

  )
}

export default AddClient