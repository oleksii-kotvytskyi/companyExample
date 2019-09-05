
export const isBrowser = () => typeof window !== undefined;

export const getWidth = () => isBrowser() ? window.innerWidth : 0;




