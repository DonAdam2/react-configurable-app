export interface ViewsInterface {
	homePage?: {
		progressBar?: {
			show?: boolean;
			height?: number | string;
		};
		parallax?: {
			show?: boolean;
			imageUrl?: string;
			speed?: number;
		};
	};
	checkoutPage?: {
		stepper?: {
			secondStepCall?: 'getMovies' | 'getActors';
			paymentService?: 'paypal' | 'stripe';
		};
	};
	timelinePage?: {
		timeLine?: {
			show?: boolean;
		};
	};
}

export interface ThemeInterface {
	palette?: {
		background?: {
			default: string;
		};
		success?: {
			main: string;
		};
		danger?: {
			main: string;
		};
		text?: {
			primary: string;
		};
	};
	typography?: {
		htmlFontSize?: number;
	};
}

export interface ConfigInterface {
	views?: ViewsInterface;
	theme?: ThemeInterface;
}
