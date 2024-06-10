import {configureStore} from '@reduxjs/toolkit'
import itemIdReducer from './slices/itemIdSlice'

export const store = configureStore({
    reducer: {
        itemId : itemIdReducer,
    },
})

