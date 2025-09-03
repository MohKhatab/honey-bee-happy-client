let loaderFns: { showLoader: () => void; hideLoader: () => void } | null = null;

export const setLoaderFns = (fns: typeof loaderFns) => {
  loaderFns = fns;
};

export const showLoader = () => loaderFns?.showLoader();
export const hideLoader = () => loaderFns?.hideLoader();
