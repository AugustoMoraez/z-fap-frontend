import {createSlice} from "@reduxjs/toolkit";
import { getLocalStorage } from "../../../hooks/LocalStorage";

type CurrentUserType = {
    data:{
        id:string,
        name:string,
        email:string,
        password:string,
        position:string,
        active:true,
        permissions:string[],
        sectorID:string,
    },
    token:string
}

export const slice = createSlice({
    name:"user",
    initialState:{
        CurrentUser:getLocalStorage<CurrentUserType>("CurrentUser")
    },  
    reducers:{
        setCurrentUser: (state,action)=> {
            localStorage.setItem("CurrentUser", JSON.stringify(action.payload));  
            return { ...state, CurrentUser:action.payload }
        }
    }
});

export const {setCurrentUser}= slice.actions;
export default slice.reducer;