import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuiltyState {
  showAddBuiltyModal: boolean;
}

const builtySlice = createSlice({
  name: "builty",
  initialState: {
    showAddBuiltyModal: false,
  },
  reducers: {
    setShowAddBuiltyModal: (state, action: PayloadAction<boolean>) => {
      state.showAddBuiltyModal = action.payload;
    },
  },
});

export const { setShowAddBuiltyModal } = builtySlice.actions;

// selector
export const selectShowAddBuiltyModal = (state: any) =>
  state.builty.showAddBuiltyModal;

export default builtySlice.reducer;
