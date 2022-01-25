import React, { FC, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
//lodash
import { merge } from 'lodash';
//constants
import { themeOptions, viewsController } from './ts/constants/Constants';
import { setEvents } from './ts/constants/EventDispatcher';
//interfaces
import { AppInterface } from './ts/interfaces/AppInterfaces';
//routes
import { MainRoutes } from './ts/routing/routingConstants/MainRoutes';

const App: FC<AppInterface> = ({ config }) => {
	useEffect(() => {
		if (config.theme) {
			merge(themeOptions, config.theme);
		}
		if (config.events) {
			setEvents(config.events);
		}
		if (config.views) {
			merge(viewsController, config.views);
		}
	}, [config.events, config.theme, config.views]);

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Webpack react boilerplate</h1>
			<MainRoutes />
		</>
	);
};

export default hot(App);
