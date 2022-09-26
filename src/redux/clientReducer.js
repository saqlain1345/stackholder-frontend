import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const getClientsData = createAsyncThunk('api/getclients', ()=>{
    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_BASEURL}/api/client/all`,
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2NDEyNzkzNywiZXhwIjoxNjY0NzMyNzM3fQ.ZQJhQ9Wcl__rIefGlnGj8Zmt0NphxA4DkK8YoYWOS6g'
        }
      };

    return axios(config)
    .then(response => {
        console.log(response.data);
        return response.data
    })
})

const addClient = createAsyncThunk('api/addclients', (data)=>{
    let config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASEURL}/api/client/new`,
        data,
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2NDEyNzkzNywiZXhwIjoxNjY0NzMyNzM3fQ.ZQJhQ9Wcl__rIefGlnGj8Zmt0NphxA4DkK8YoYWOS6g'
        }
      };

    return axios(config)
    .then(response => {
        console.log(response.data);
        return response.data
    })
})

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        data: [],
        error: "",
        loading: false
    },
    extraReducers: {
        [getClientsData.fulfilled] : (state, action)=>{
            state.loading = false
            state.data = action.payload
        },
        [getClientsData.pending] : (state)=>{
            state.loading = true
        },
        [getClientsData.rejected] : (state)=>{
            state.loading = false
            state.error = "Something went wrong"
        },
        [addClient.fulfilled] : (state)=>{
            state.loading = false
        },
        [addClient.pending] : (state)=>{
            state.loading = true
        },
        [addClient.rejected] : (state)=>{
            state.loading = false
            state.error = "Client not added!"
        }
    }
})

export {getClientsData, addClient}
export default clientSlice.reducer;