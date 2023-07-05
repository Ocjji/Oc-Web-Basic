// import React from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// import countReducer from "./modules/countSlice";
// import colorReducer from "./modules/colorSlice";
// import changeColorReducer from "./modules/changeColorSlice";
// import counterReducer from "./modules/counterSlice";
// import todoReducer from "./modules/todoSlice";

// export const store = configureStore({
//     reducer: {
//         countR: countReducer,
//         colorR: colorReducer,
//         changeColorR: changeColorReducer,
//         counterR: counterReducer,
//         todoR: todoReducer
//     }
// })


import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import counter from "./modules/counterSlice";
import colorPicker from "./modules/colorPickSlice";

export const store = configureStore({
    reducer: {
        counter,
        colorPicker,
    }
})