import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//routes
import { routesConfig } from './ts/routing/routingConstants/routesConfig';
//constants
import { themeOptions } from './ts/constants/Constants';
//components
import Header from './ts/components/header/Header';

const App = () => {
	/*useEffect(() => {
		if (config.theme) {
			merge(themeOptions, config.theme);
		}
		if (config.views) {
			merge(viewsController, config.views);
		}
	}, [config.theme, config.views]);*/

	return (
		<div
			className="container"
			style={{
				fontSize: themeOptions.typography.htmlFontSize,
				backgroundColor: themeOptions.palette.background.default,
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
						element={<p style={{ color: themeOptions.palette.danger.main }}>Page not found</p>}
					/>
				</Routes>
			</main>
			<ToastContainer />
		</div>
	);
};

export default hot(App);
