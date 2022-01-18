import React, { lazy, Suspense, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
//lodash
import { merge } from 'lodash';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//constants
import { themeOptions, viewsController } from './js/constants/Constants';
import { setEvents } from './js/constants/EventDispatcher';
//components
import LoadingIcon from './js/components/shared/LoadingIcon';
const TestComponent = lazy(() => import('./js/containers/TestComponent'));

const App = ({ config }) => {
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
				<TestComponent />
			</Suspense>
		</ErrorBoundary>
	);
};

export default hot(App);
