import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { merge, isEmpty } from 'lodash';
//interfaces
import { ConfigInterface } from './ts/interfaces/AppInterfaces';
import { State } from './ts/store/rootReducer';
//routes
import { routesConfig } from './ts/routing/routingConstants/routesConfig';
//services
import ConfigurationService from './ts/services/ConfigurationService';
//constants
import { themeOptions, viewsController } from './ts/constants/Constants';
//custom hooks
import useFetch from './ts/customHooks/useFetch';
//selectors
import { getAppConfig } from './ts/store/app/selectors/AppSelectors';
//actions
import { updateAppConfig } from './ts/store/app/actions/AppActions';
//components
import Header from './ts/components/header/Header';
import LoadingIcon from './ts/components/shared/loadingIcon/LoadingIcon';

const App = () => {
	const dispatch = useDispatch(),
		{ theme } = useSelector((state: State) => getAppConfig(state)),
		api = useCallback(
			() => ConfigurationService.fetchConfig('/4531be2f-b9da-4b28-807b-243e822fb099'),
			// () => ConfigurationService.fetchConfig('/2811de58-561d-44df-8d2f-d83f4b4d2610'),
			// () => ConfigurationService.fetchConfig('/9aad4440-2fb9-4f7f-a76d-4095c8079020'),
			// () => ConfigurationService.fetchConfig('/12ffd111-ab46-4b78-8626-d707fb228ea4'),
			[]
		),
		{ data, isLoading, error } = useFetch<ConfigInterface>(api);

	useEffect(() => {
		if (data) {
			let config = {};
			if (data.theme) {
				config = { theme: merge(themeOptions, data.theme) };
			}
			if (data.views) {
				config = { ...config, views: merge(viewsController, data.views) };
			}
			if (!isEmpty(config)) {
				dispatch(updateAppConfig(config));
			}
		}
	}, [data, dispatch]);

	if (error) return <p>Error!</p>;

	return (
		<>
			{isLoading ? (
				<LoadingIcon />
			) : (
				<div
					className="container"
					style={{
						fontSize: theme?.typography?.htmlFontSize,
						backgroundColor: theme?.palette?.background?.default,
					}}
				>
					{/*<h1 style={{ textAlign: 'center' }}>Webpack react boilerplate</h1>*/}
					<Header />
					<main>
						<Routes>
							{routesConfig.map((el) => (
								<Route key={el.path} path={el.path} element={el.element} />
							))}
							<Route
								path="*"
								element={<p style={{ color: theme?.palette?.danger?.main }}>Page not found</p>}
							/>
						</Routes>
					</main>
					<ToastContainer />
				</div>
			)}
		</>
	);
};

export default hot(App);
