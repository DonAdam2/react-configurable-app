import React, { FC, lazy, Suspense, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
//lodash
import { merge } from 'lodash';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './ts/generic/ErrorBoundaryFallback';
//constants
import { themeOptions, viewsController } from './ts/constants/Constants';
import { setEvents } from './ts/constants/EventDispatcher';
//interfaces
import { AppInterface } from './ts/interfaces/AppInterfaces';
//components
import LoadingIcon from './ts/components/shared/loadingIcon/LoadingIcon';
const TestComponent = lazy(() => import('./ts/containers/TestComponent'));

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
		<ErrorBoundary
			FallbackComponent={ErrorBoundaryFallback}
			onReset={() => {
				//Reset the state of your app so the error doesn't happen again
				console.log('Try again clicked');
			}}
		>
			<Suspense
				fallback={
					<div className="loader-wrapper">
						<LoadingIcon />
					</div>
				}
			>
				<h1 style={{ textAlign: 'center' }}>Webpack react boilerplate</h1>
				<TestComponent />
			</Suspense>
		</ErrorBoundary>
	);
};

export default hot(App);
