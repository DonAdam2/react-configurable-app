//action types
import { AppActionTypes } from '../AppActionTypes';
//constants
import { updateObject } from '../../../constants/Helpers';
import { defaultConfiguration } from '../../../constants/Constants';
//interfaces
import { Action } from '../AppActionsInterfaces';
import { AppReducerInitialState } from '../AppReducersInterfaces';

const initialState: AppReducerInitialState = {
	testString: 'Initial test',
	config: defaultConfiguration,
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case AppActionTypes.TEST_ACTION:
			return updateObject(state, { testString: 'Final test' });
		case AppActionTypes.UPDATE_APP_CONFIG:
			return updateObject(state, { config: action.config });
		default:
			return state;
	}
};

export default reducer;
