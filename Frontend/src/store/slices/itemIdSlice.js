import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itmId: 0,
};

export const itemIdSlice = createSlice({
  name: "itemId",
  initialState,
  reducers: {
    selectItmId : (state,action) => {
        state.itmId = action.payload;
    },
  },
});


export const {selectItmId} = itemIdSlice.actions;
export default itemIdSlice.reducer;
