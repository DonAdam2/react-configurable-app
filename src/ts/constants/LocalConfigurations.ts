import { ConfigInterface } from '../interfaces/AppInterfaces';

// Config 1: Default — all features on, movies + paypal, light theme
export const configOne: ConfigInterface = {
  theme: {
    palette: {
      background: { default: '#ffffff' },
      success: { main: '#13B07A' },
      danger: { main: '#ff2058' },
      text: { primary: '#000000' },
    },
    typography: { htmlFontSize: 16 },
  },
  views: {
    homePage: {
      progressBar: { show: true, height: '.5rem' },
      parallax: {
        show: true,
        imageUrl: 'https://picsum.photos/1280/500/?image=50',
        speed: 3,
      },
    },
    checkoutPage: {
      stepper: { secondStepCall: 'getMovies', paymentService: 'paypal' },
    },
    timelinePage: { timeLine: { show: true } },
  },
};

// Config 2: Dark theme, actors + stripe, larger font
export const configTwo: ConfigInterface = {
  theme: {
    palette: {
      background: { default: '#1a1a2e' },
      success: { main: '#00b894' },
      danger: { main: '#e17055' },
      text: { primary: '#eaeaea' },
    },
    typography: { htmlFontSize: 18 },
  },
  views: {
    homePage: {
      progressBar: { show: true, height: '1rem' },
      parallax: {
        show: true,
        imageUrl: 'https://picsum.photos/1280/500/?image=100',
        speed: 5,
      },
    },
    checkoutPage: {
      stepper: { secondStepCall: 'getActors', paymentService: 'stripe' },
    },
    timelinePage: { timeLine: { show: true } },
  },
};

// Config 3: Minimal — no parallax, no timeline, movies + stripe
export const configThree: ConfigInterface = {
  theme: {
    palette: {
      background: { default: '#f5f5f5' },
      success: { main: '#27ae60' },
      danger: { main: '#c0392b' },
      text: { primary: '#2c3e50' },
    },
    typography: { htmlFontSize: 14 },
  },
  views: {
    homePage: {
      progressBar: { show: true, height: '.3rem' },
      parallax: { show: false },
    },
    checkoutPage: {
      stepper: { secondStepCall: 'getMovies', paymentService: 'stripe' },
    },
    timelinePage: { timeLine: { show: false } },
  },
};

// Config 4: Bare-bones — no progress bar, no parallax, actors + paypal
export const configFour: ConfigInterface = {
  theme: {
    palette: {
      background: { default: '#16213e' },
      success: { main: '#1abc9c' },
      danger: { main: '#e74c3c' },
      text: { primary: '#d4d4d4' },
    },
    typography: { htmlFontSize: 20 },
  },
  views: {
    homePage: {
      progressBar: { show: false },
      parallax: { show: false },
    },
    checkoutPage: {
      stepper: { secondStepCall: 'getActors', paymentService: 'paypal' },
    },
    timelinePage: { timeLine: { show: true } },
  },
};

export const localConfigurations: ConfigInterface[] = [
  configOne,
  configTwo,
  configThree,
  configFour,
];
