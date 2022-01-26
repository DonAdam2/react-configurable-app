import { useEffect, useReducer } from 'react';
import { AxiosPromise } from 'axios';

interface State<T> {
	isLoading: boolean;
	data?: T;
	error?: Error;
}

type Action<T> =
	| { type: 'pending' }
	| { type: 'resolved'; data: T }
	| { type: 'rejected'; error: Error };

const useFetch = <T = unknown>(api: () => AxiosPromise<any>): State<T> => {
	const initialState: State<T> = {
		isLoading: false,
		error: undefined,
		data: undefined,
	};

	const asyncReducer = (state: State<T>, action: Action<T>): State<T> => {
		switch (action.type) {
			case 'pending': {
				return { ...initialState, isLoading: true };
			}
			case 'resolved': {
				return { ...initialState, data: action.data };
			}
			case 'rejected': {
				return { ...initialState, error: action.error };
			}
			default: {
				return state;
			}
		}
	};

	const [state, dispatch] = useReducer(asyncReducer, initialState);

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			(async () => {
				dispatch({ type: 'pending' });
				try {
					const res = await api();
					dispatch({ type: 'resolved', data: res.data });
				} catch (err) {
					console.log(err);
					dispatch({ type: 'rejected', error: err as Error });
				}
			})();
		}

		return () => {
			isMounted = false;
		};
	}, [api]);

	return { isLoading: state.isLoading, error: state.error, data: state.data };
};

export default useFetch;
