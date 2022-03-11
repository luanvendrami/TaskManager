import { ReactNode } from "react";
import Modal from "react-modal";
import fechar from "../../assets/x.svg";
import { Container } from "./styled";

interface OpenModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  overlayClassName: string;
  className: string;
  children: ReactNode;
}

export function IsModal({ isOpen, onRequestClose, overlayClassName, className, children }: OpenModalProps) {
  return (
    <Container>
      <Modal 
      isOpen={isOpen} 
      overlayClassName={overlayClassName}
      className={className}
      >
        <button
          type="button"
          onClick={onRequestClose} 
          className="react-modal-close"
        >
          <img src={fechar} alt="Fechar Modal" />
        </button>
        {children}
      </Modal>
    </Container>
  );
}
