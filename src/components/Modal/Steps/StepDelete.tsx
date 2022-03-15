import { IsModal } from "..";
import { Button } from "./styled";

interface PropsSteps{
    valueModal: boolean;
    handleModalClose: () => void;
    validaDelete:(isChecked: boolean) => void;
    isEdit: number;
    isChecked: boolean
}

export function  StepDelete({valueModal, handleModalClose, validaDelete, isEdit, isChecked }: PropsSteps){
    return(
        <IsModal
          isOpen={valueModal}
          onRequestClose={handleModalClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h3>Você deseja deletar está tarefa?</h3>
          <Button
          edit={isEdit}
            className="buttonStyle"
            onClick={() => validaDelete(isChecked)}
          >
            Confirmar
          </Button>
        </IsModal>
    )
}