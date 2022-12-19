import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: 'cart',
    initialState : [],
    reducers:{
        add(state,action){
            console.log("action ", action)
            // Redux
            // return[...state,action.payload];
            //  We directly muted our state using createslice method
            state.push(action.payload); 
        },
        remove(state,action){
            // current state to filter and id not match to action.payload
            return state.filter(item => item.id !== action.payload)
        },

    }
 });

//  export the add and remove from cartslide in action name property
export const {add,remove} = cartslice.actions;

// in redux we have to write 
// reducers and actions file we have to ready
// like taht object and action name in string
// {type: 'add/cart, payload: 1}

export default cartslice.reducer;
