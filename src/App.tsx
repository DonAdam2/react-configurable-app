import React, { FC, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Routes } from 'react-router-dom';
//lodash
import { merge } from 'lodash';
//constants
import { themeOptions, viewsController } from './ts/constants/Constants';
import { setEvents } from './ts/constants/EventDispatcher';
//interfaces
import { AppInterface } from './ts/interfaces/AppInterfaces';
//routes
import { routesConfig } from './ts/routing/routingConstants/routesConfig';
//components
import Header from './ts/components/header/Header';

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
		<div className="container">
			{/*<h1 style={{ textAlign: 'center' }}>Webpack react boilerplate</h1>*/}
			<Header />
			<Routes>
				{routesConfig.map((el) => (
					<Route key={el.path} path={el.path} element={el.element} />
				))}
				<Route path="*" element={<p style={{ color: 'red' }}>Page not found</p>} />
			</Routes>
		</div>
	);
};

export default hot(App);
