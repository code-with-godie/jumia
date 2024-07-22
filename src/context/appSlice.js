import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModel: false,
  showDrawer: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openAccountModel: state => {
      state.showModel = true;
    },
    closeAccountModel: state => {
      state.showModel = false;
    },
    openDrawer: state => {
      state.showDrawer = true;
    },
    closeDrawer: state => {
      state.showDrawer = false;
    },
    toggleAccountModel: state => {
      state.showModel = !state.showModel;
    },
  },
});

export const {
  openAccountModel,
  closeAccountModel,
  openDrawer,
  closeDrawer,
  toggleAccountModel,
} = appSlice.actions;

export default appSlice.reducer;
