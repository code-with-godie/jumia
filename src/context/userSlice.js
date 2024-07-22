import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('jumia-user', JSON.stringify(action.payload));
      state.currentUser = action.payload;
    },
    getUser: state => {
      const user = JSON.parse(localStorage.getItem('jumia-user'));
      state.currentUser = user;
    },
    logout: state => {
      localStorage.setItem('jumia-user', JSON.stringify(null));
      state.currentUser = null;
    },
    updateUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { getUser, logout, login, updateUser } = userSlice.actions;

export default userSlice.reducer;
