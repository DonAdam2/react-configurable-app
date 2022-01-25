import React from 'react';
import { useRoutes } from 'react-router-dom';
//URLS
import { getCheckoutPageUrl, getHomePageUrl, getTimeLinePageUrl } from './AppUrls';
//pages
import HomePage from '../../containers/pages/homePage/HomePage';
import CheckoutPage from '../../containers/pages/checkoutPage/CheckoutPage';
import TimelinePage from '../../containers/pages/timelinePage/TimelinePage';

export const MainRoutes = () => {
	const mainRoutes = [
		{ path: getHomePageUrl(), element: <HomePage /> },
		{ path: getCheckoutPageUrl(), element: <CheckoutPage /> },
		{ path: getTimeLinePageUrl(), element: <TimelinePage /> },
	];

	return useRoutes(mainRoutes);
};
