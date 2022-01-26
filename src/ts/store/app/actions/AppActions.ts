//action types
import { AppActionTypes } from '../AppActionTypes';
//interfaces
import { Action } from '../AppActionsInterfaces';
import { ConfigInterface } from '../../../interfaces/AppInterfaces';

export const setTestAction = (): Action => ({
	type: AppActionTypes.TEST_ACTION,
});

export const updateAppConfig = (config: ConfigInterface): Action => ({
	type: AppActionTypes.UPDATE_APP_CONFIG,
	config,
});
