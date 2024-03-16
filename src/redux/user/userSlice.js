import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    loading: false,
    error: null,
    token : null,
};


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        token : (state,action)=>{
            state.token = action.payload;
            state.loading = false;
        },
        signInStart :(state)=>{
            state.loading = true;
        },
        signInSuccess : (state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure : (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        logOutStart : (state)=>{
            state.loading = true;
        },
        logOutSuccess : (state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null;
            state.token = null;
        },
        logOutFailure : (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        }
    }

});

export const {signInFailure, signInStart, signInSuccess, logOutFailure, logOutStart, logOutSuccess, token} = userSlice.actions;
export const userReducers = userSlice.reducer;
export const userSelector = (state)=>state.user;