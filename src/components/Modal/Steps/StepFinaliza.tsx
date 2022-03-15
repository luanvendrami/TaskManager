import { useEffect } from "react";
import { IsModal } from "..";
import { Button, InputEdit } from "./styled";



interface PropsSteps{
    valueModal: boolean;
    handleModalClose: () => void;
    validaUpdateFinalizada:(isChecked: boolean) => void;
    isEdit: number;
    isChecked: boolean
}

export function StepFinaliza({valueModal, handleModalClose, validaUpdateFinalizada, isEdit, isChecked }: PropsSteps){
  useEffect(() => {
    validaUpdateFinalizada(isChecked)
  }, [])
    return(
        <IsModal
          isOpen={valueModal}
          onRequestClose={handleModalClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h3>Você deseja Finalizar está tarefa?</h3>
          <h4>ATENÇÂO</h4>
          <h4 className="typeColorH4Red">As tarefas finalizadas após um periodo de 24 horas serão excluidas.</h4>
          <Button
            edit={isEdit}
            className="buttonStyle"
            onClick={() => validaUpdateFinalizada(isChecked)}
          >
            Confirmar
          </Button>
        </IsModal>
    )
}