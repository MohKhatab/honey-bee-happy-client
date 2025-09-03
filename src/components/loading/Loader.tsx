import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { PiSpinnerBold } from "react-icons/pi";
import { setLoaderFns } from "./LoaderFunctions";

export default function Loader() {
  const { isLoading } = useLoader();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 150);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!show) return null;

  return createPortal(
    <div
      className={`no-doc-scroll fixed inset-0 flex items-center justify-center
        bg-grayscale-950/50 backdrop-blur-sm text-3xl font-bold
        text-primary-400 transition-opacity duration-150 ease-in-out
        ${isLoading ? "opacity-100" : "opacity-0"} z-50`}
    >
      <PiSpinnerBold className="text-9xl animate-spin" />
    </div>,
    document.body
  );
}

type LoadingContextType = {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const loadingCount = useRef(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoader = useCallback(() => {
    loadingCount.current += 1;
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    if (loadingCount) loadingCount.current -= 1;
    if (loadingCount.current === 0) setIsLoading(false);
  }, []);

  useEffect(() => {
    setLoaderFns({ showLoader, hideLoader });
  }, [showLoader, hideLoader]);

  return (
    <LoadingContext.Provider value={{ isLoading, hideLoader, showLoader }}>
      <Loader />
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
