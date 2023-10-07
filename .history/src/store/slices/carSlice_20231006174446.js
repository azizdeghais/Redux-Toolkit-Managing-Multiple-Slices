import { createSlice } from "@reduxjs/toolkit";

const carSlice=createSlice({
    name:'cars',
    initialState:{
        searchTerm:'',
        cars:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm=action.payload;
        },
        addCar(state,action){
            state.cars.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:Math.random()
            })

        },
        removeCar(state,action){
        }

    }
})

export const {changeName,changeCost }=formSlice.actions;
export const {formReducer}=formSlice.reducer;