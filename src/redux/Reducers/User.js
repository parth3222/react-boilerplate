// reducers/slice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    someValue: 0,
    userData: []
};

export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId, thunkAPI) => {
    const response = await axios.get('http://localhost:8080/users/get')
    return response.data
},
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.someValue++;
        },
        decrement: (state) => {
            state.someValue--;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.userData = action.payload
        })
    },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
