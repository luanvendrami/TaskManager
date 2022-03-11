import { useEffect, useState } from "react";
import { IDados } from "../../interface/IDados";
import api from "../../service/api";
import { IsModal } from "../Modal";
import * as C from "./styled";

type Props = {
  item: IDados;
};

export function ListItem({ item }: Props) {
  const [isChecked, setIsChecked] = useState(Boolean);
  const [buttonDisabled, setButtonDisabled] = useState(Boolean);
  const [valueModal, setValueModal] = useState(false);

  useEffect(() => {
    setButtonDisabled(Boolean)
  }, [])


  function handleModalOpen() {
    setValueModal(true);
  }

  function handleModalClose() {
    setValueModal(false);
  }

  async function deleteTask(): Promise<void> {
    api.delete(`/Cadastro/${item.id}`);
  }

  async function validaDelete(isChecked: boolean) {
    if (isChecked === true) {
      handleModalOpen();
      if (valueModal) {
        deleteTask();
        handleModalClose()
        setIsChecked(false)   
      } 
    }
  }


  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>

      <C.DivFlutuante>
        <button
          disabled={buttonDisabled}
          onClick={() => validaDelete(isChecked)}
        >
          Deletar
        </button>
        <IsModal
          isOpen={valueModal}
          onRequestClose={handleModalClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h3>Você deseja deletar está tarefa?</h3>
          <C.Button className="buttonStyle" onClick={() => validaDelete(isChecked)} >Confirmar</C.Button>
        </IsModal>
      </C.DivFlutuante>
    </C.Container>
  );
}
