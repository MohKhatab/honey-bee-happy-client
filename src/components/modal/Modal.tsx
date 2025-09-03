import { createContext, useContext, useState, type ReactNode } from "react";
import ReactDOM from "react-dom";

function Modal({ children }: { children: ReactNode }) {
  const { hideModal } = useModal();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      hideModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-grayscale-950/60 backdrop-blur-lg no-doc-scroll"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>,
    document.getElementById("modal-root")!
  );
}

type ModalContextType = {
  modalIsOpen: boolean;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setModalIsOpen(true);
    setModalContent(content);
  };
  const hideModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen, showModal, hideModal }}>
      {modalIsOpen && <Modal>{modalContent}</Modal>}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
