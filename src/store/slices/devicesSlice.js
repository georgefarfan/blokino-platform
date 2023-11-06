import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_DEVICE = {
  port: '',
  name: '',
  fullName: '',
  os: '',
};

const INITAL_STATE = {
  devices: [],
  device: INITIAL_DEVICE,
};

export const devicesSlice = createSlice({
  name: 'devices',
  initialState: INITAL_STATE,
  reducers: {
    setDevices: (state, action) => {
      state.devices = action.payload.data;
    },
    setDevice: (state, action) => {
      state.device = action.payload.data;
    },
  },
});

export const { setDevice, setDevices } = devicesSlice.actions;

export default devicesSlice.reducer;
