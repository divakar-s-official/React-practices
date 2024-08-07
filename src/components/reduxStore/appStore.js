import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'

const appStore = configureStore({
    reducer : { // responsible for modify the appStore

        // combination of small store
        cart : cartSlice,
        
    }
    
    
    
});

export default appStore;