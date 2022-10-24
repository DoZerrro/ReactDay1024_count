import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../reducer/countSlice";

const store = configureStore({
    reducer: {
        //countSlice 뒤에 ()가 붙지않게 조심해야한다.
        count: countSlice
    }
})

export default store;