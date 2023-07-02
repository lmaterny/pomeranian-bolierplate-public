import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';

//!Przykładowa konfiguracja store z wartością do wyświetlenia
// const initialTestState = {
//     value: 'store is working'
// }

// export const storeTest = createSlice({
//     name: 'store-test',
//     initialState: initialTestState,
//     reducers: {}
// })

// export const store = configureStore({
//     reducer:{
//         storeTest: storeTest.reducer
//     }
// })

export const store = configureStore({
reducer: {
    counter: counterReducer,
}
})
