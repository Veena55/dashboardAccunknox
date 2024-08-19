import { createSlice } from "@reduxjs/toolkit";
import data from '../../Data/dummyData.json';

const INTITIAL_STATE = {
    data,
    flag: false
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: INTITIAL_STATE,
    reducers: {
        all: (state, action) => { return state.data },
        add: (state, action) => {
            return state.data = action.payload
        },
        remove: (state, action) => {
            return state.data = action.payload
        },
        showWidget: (state, action) => {
            // console.log(action.payload);
            return { ...state, flag: action.payload };
        },
        toggleWidget: (state, action) => {
            const wigetDetails = action.payload;
            console.log(wigetDetails);
            state.data.forEach(dashboard => {
                dashboard.categories.forEach(category => {
                    if (category.name == wigetDetails.categoryName) {
                        category.widgets.forEach(widget => {
                            if (widget.name == wigetDetails.widgetName) {
                                widget.isActive = wigetDetails.isActive;
                            }
                        })
                    }
                })
            })
            // const filtredData = state.data.map(item => {
            //     return {
            //         ...item,
            //         categories: item.categories.filter((category) => category.name === action.payload)
            //     };
            // });
            // console.log(filtredData);
            // return { ...state, data: filtredData }
        }
    }
})

export const dashboardReducer = dashboardSlice.reducer;
export const { all, add, remove, showWidget, toggleWidget } = dashboardSlice.actions;

//selector to access dashboard data
export const dashboardSelector = (state) => state.dashboardReducer;