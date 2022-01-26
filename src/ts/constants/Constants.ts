import { ViewsInterface } from '../interfaces/AppInterfaces';

export const themeOptions = {
	palette: {
		background: {
			default: '#ffffff',
		},
		success: {
			main: '#13B07A',
		},
		danger: {
			main: '#ff2058',
		},
		text: {
			primary: '#000000',
		},
	},
	typography: {
		htmlFontSize: 16,
	},
};

export const viewsController: ViewsInterface = {
	homePage: {
		progressBar: {
			show: true,
			height: '.5rem',
		},
		parallax: {
			show: true,
			imageUrl: 'https://picsum.photos/1280/500/?image=50',
			speed: 3,
		},
	},
	checkoutPage: {
		stepper: {
			secondStepCall: 'getMovies',
			paymentService: 'paypal',
		},
	},
	timelinePage: {
		timeLine: {
			show: true,
		},
	},
};
