import { ReactNode } from "react";
import Modal from "react-modal";
import fechar from "../../assets/x.svg";
import { Button, Container } from "./styled";

interface OpenModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  functionActions: () => void;
}

export function IsModal({
  isOpen,
  onRequestClose,
  functionActions,
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
        <h3>Você deseja deletar está tarefa?</h3>
        <Button className="buttonStyle" onClick={() => functionActions()}>
          Confirmar
        </Button>
      </Modal>
    </Container>
  );
}
