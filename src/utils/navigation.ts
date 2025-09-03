let navigateFn: ((path: string) => void) | null = null;

export const setNavigate = (fn: (path: string) => void) => {
  navigateFn = fn;
};

export const navigate = (path: string) => {
  if (navigateFn) navigateFn(path);
};
