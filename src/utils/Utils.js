
const MOBILE_BREAKPOINT = 550;

export const isBrowser = () => typeof window !== undefined;

export const getWidth = () => isBrowser() ? window.innerWidth : 0;

export const isMobile = () => getWidth() < MOBILE_BREAKPOINT;


