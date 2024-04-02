import { createSlice } from '@reduxjs/toolkit'

//const initialState = {value: 0,}  

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count:0, 
        name:"sammy"
    },

    reducers : {
        increament: (state)=>{
        state.count= state.count + 1
        },

        incrementByNumber:(state, action)=>{
            state.count = state.count + action.payload
        }
    }

}) 

export const{increament, incrementByNumber}= counterSlice.actions  //exporting the functions as objects
export default counterSlice.reducer