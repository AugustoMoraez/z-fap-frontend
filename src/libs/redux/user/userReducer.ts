import {createSlice} from "@reduxjs/toolkit";



export const slice = createSlice({
    name:"user",
    initialState:{
        CurrentUser:{
            data:{
                id:"",
                name:"",
                email:"",
                password:"",
                position:"",
                active:true,
                permissions:["padrao"],
                sectorID:"",
            },
            token:""
        }
    },  
    reducers:{
        setCurrentUser: (state,action)=> {
                state.CurrentUser = action.payload;
        }
    }
});

export const {setCurrentUser}= slice.actions;
export default slice.reducer;