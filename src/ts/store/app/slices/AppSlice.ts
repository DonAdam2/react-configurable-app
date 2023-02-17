import { createSlice } from '@reduxjs/toolkit';
//constants
import { defaultConfiguration } from '@/ts/constants/Constants';
//interfaces
import { AppSliceInitialState } from '@/ts/store/app/AppEntityInterfaces';

const initialState: AppSliceInitialState = {
  testString: 'Initial test',
  config: defaultConfiguration,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTestString: (state) => {
      state.testString = 'Final test';
    },
    updateAppConfig: (state, action) => {
      state.config = action.payload;
    },
  },
});

export const { updateTestString, updateAppConfig } = appSlice.actions;
export default appSlice.reducer;
