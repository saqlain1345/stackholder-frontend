import React from 'react';
import './AddUser.css';
import CustomTextField from '../../../uicomponents/CustomTextField/CustomTextField';
import CustomPasswordField from '../../../uicomponents/CustomPasswordField/CustomPasswordField';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const AddUser = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));
    return (
        <>
            <p className='contentHeading'>Add User</p>
            <CustomTextField required label="Full Name" name="name"/>
            <CustomTextField required label="User Role" name="name"/>
            <CustomTextField required label="Email" name="email"/>
            <CustomPasswordField required label="Password" name="password"/>

            <ColorButton variant="contained">Submit</ColorButton>
            
        </>
    );
};

export default AddUser;