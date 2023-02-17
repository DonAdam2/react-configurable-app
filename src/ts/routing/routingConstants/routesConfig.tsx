import React from 'react';
//URLS
import { getCheckoutPageUrl, getHomePageUrl, getTimeLinePageUrl } from './AppUrls';
//pages
import HomePage from '../../containers/pages/homePage/HomePage';
import CheckoutPage from '../../containers/pages/checkoutPage/CheckoutPage';
import TimelinePage from '../../containers/pages/timelinePage/TimelinePage';

export const routesConfig = [
  { path: getHomePageUrl(), element: <HomePage />, label: 'Home' },
  { path: getCheckoutPageUrl(), element: <CheckoutPage />, label: 'Checkout' },
  { path: getTimeLinePageUrl(), element: <TimelinePage />, label: 'Timeline' },
];
