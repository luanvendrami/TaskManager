import { ReactNode } from "react";
import Modal from "react-modal";
import fechar from "../../assets/x.svg";
import { Button, Container } from "./styled";

interface OpenModalProps {
  modalStyle: number | undefined;
  isOpen: boolean;
  onRequestClose: () => void;
  functionActions: () => void;
  children: ReactNode;
}

export function IsModal({
  modalStyle,
  isOpen,
  onRequestClose,
  functionActions,
  children,
}: OpenModalProps) {
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={fechar} alt="Fechar Modal" />
        </button>
        {children}
        <Button
          className="buttonStyle"
          onClick={() => functionActions()}
          modalStyle={modalStyle}
        >
          Confirmar
        </Button>
      </Modal>
    </Container>
  );
}
