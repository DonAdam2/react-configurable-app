export interface EventDispatcherInterface {
	trigger?: (eventName: string, payload: any) => void;
}

export interface EventsInterface {
	[prop: string]: (payload: any) => void;
}

export interface ViewsInterface {
	testComponent?: {
		isPayment?: boolean;
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

export interface AppInterface {
	config: {
		events?: EventsInterface;
		views?: ViewsInterface;
		theme?: ThemeInterface;
	};
}
