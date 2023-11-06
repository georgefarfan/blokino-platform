import { configureStore } from '@reduxjs/toolkit';
import contextReducer from './slices/contextSlice';
import devicesReducer from './slices/devicesSlice';

export default configureStore({
  reducer: {
    context: contextReducer,
    devices: devicesReducer,
  },
});
