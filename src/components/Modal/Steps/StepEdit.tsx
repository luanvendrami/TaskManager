import { IsModal } from "..";
import { Button, InputEdit } from "./styled";

interface PropsSteps{
    valueModal: boolean;
    handleModalClose: () => void;
    setNewName: (newName: string) => void;
    validaUpdate:(isChecked: boolean) => void;
    isEdit: number;
    isChecked: boolean
}

export function StepEdit({valueModal, handleModalClose, setNewName, validaUpdate, isEdit, isChecked }: PropsSteps) {
    return (
        <IsModal
          isOpen={valueModal}
          onRequestClose={handleModalClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h3>Você deseja Editar está tarefa?</h3>
          <h4 className="h4new">Digite a nova descrição da tarefa:</h4>
          <InputEdit
            type="text"
            checked={isChecked}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button
            edit={isEdit}
            className="buttonStyle"
            onClick={() => validaUpdate(isChecked)}
          >
            Confirmar
          </Button>
        </IsModal>
    )
}