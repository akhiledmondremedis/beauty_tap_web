import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false,
};

export const initFacebookPixel = () => {
  ReactPixel.init('1031445332468232', undefined, options);
};

export const trackPageView = () => {
  ReactPixel.pageView();
};

export const trackEvent = (eventName, data) => {
  ReactPixel.track(eventName, data);
};
