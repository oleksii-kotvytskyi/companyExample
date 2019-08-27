
export const isBrowser = () => typeof window !== undefined;

export const getWidth = () => {
    if (isBrowser())
        return window.innerWidth;

    return 0
};

