import { RootState } from '@/ts/store/store';

export const getTestAction = (state: RootState) => state.app.testString;

export const getAppConfig = (state: RootState) => state.app.config;

//replace the following with your own selector
export const getAppUserPermissionsList = (state: RootState) => {
  console.log(state);
  return ['search'];
};
