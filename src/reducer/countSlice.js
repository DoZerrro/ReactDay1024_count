import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: {count: 10},
    reducers: {
        plus: (state) => {
            console.log("plus")
            state.count++
        },
        minus: (state) => {
            console.log("minus")
            state.count--
        }
    }
})

export const {plus, minus} = countSlice.actions
export default countSlice.reducer