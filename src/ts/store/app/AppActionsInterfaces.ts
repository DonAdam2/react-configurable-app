// action types
import { AppActionTypes } from './AppActionTypes';
//interfaces
import { ConfigInterface } from '../../interfaces/AppInterfaces';
/* PLOP_INJECT_ACTION_INTERFACE */

interface TestAction {
	type: AppActionTypes.TEST_ACTION;
}

interface UpdateConfig {
	type: AppActionTypes.UPDATE_APP_CONFIG;
	config: ConfigInterface;
}

export type Action =
	/* PLOP_INJECT_ACTION */
	UpdateConfig | TestAction;
