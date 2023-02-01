
// import { createStore } from "redux";

// const reducer = (state=0, action) => {
    
//         if (action.type === 'AddCONTACTS') {
//             return {contacts: [...state.contacts, 1] }
//         }
    
//         if (action.type === 'DelateCONTACT') {
//             return {contacts: state.contacts.pop()}
//         }
    
    
//     console.log(state, action)
//     return state
// };

// export const store = createStore( reducer, {contacts: [1]} )
// console.log(store.getState());

// // store.dispatch({type: 'AddCONTACTS'})
// store.dispatch({type: 'DelateCONTACT'})
// console.log(store.getState());

import { configureStore } from "@reduxjs/toolkit";


// const store = configureStore({reducer: rootReducer})

