import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const store = configureStore({
    // create like slice the object in that the property reducer and given name 
    reducer : {
        // import the cartreducer beacuse we call from the cartslice file
        cart: cartReducer,
    },
});
// Now export the store
export default store;