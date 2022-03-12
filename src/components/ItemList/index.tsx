import { useEffect, useState } from "react";
import { IDados } from "../../interface/IDados";
import api from "../../service/api";
import { IsModal } from "../Modal";
import * as C from "./styled";

type Props = {
  item: IDados;
  deleteTarefa: (id: number) => void;
  updateTarefa: (id: number, name: string) => void;
};

export function ListItem({ item, deleteTarefa, updateTarefa }: Props) {
  const [isChecked, setIsChecked] = useState(Boolean);
  const [isEdit, setIsEdit] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(Boolean);
  const [valueModal, setValueModal] = useState(false);
  const [newName, setNewName] = useState('')

  function handleModalOpen() {
    setValueModal(true);
  }

  function handleModalClose() {
    setValueModal(false);
  }

  async function validaDelete(isChecked: boolean) {
    if (isChecked === true) {
      handleModalOpen();
      setIsEdit(1);
      if (valueModal) {
        deleteTarefa(item.id);
        handleModalClose();
        setIsChecked(false);
      }
    }
  }

  async function validaUpdate(isChecked: boolean) {
    if (isChecked === true) {
      handleModalOpen();
      setIsEdit(0);
      if(valueModal){
        updateTarefa(item.id, newName);
        handleModalClose();
        setIsChecked(false);
      } 
    }
  }


  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        className="inputPrincipal"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>

      <C.DivFlutuanteDelete>
        <button
          disabled={buttonDisabled}
          onClick={() => validaDelete(isChecked)}
          className="buttonDelete"
          value={isEdit}
        >
          Deletar
        </button>
      </C.DivFlutuanteDelete>
      <C.DivFlutuanteEdit>
        <button
          disabled={buttonDisabled}
          onClick={() => validaUpdate(isChecked)}
          className="buttonEdit"
          value={isEdit}
        >
          Editar
        </button>
      </C.DivFlutuanteEdit>
      {isEdit === 0 ? (
        <IsModal
          isOpen={valueModal}
          onRequestClose={handleModalClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h3>Você deseja Editar está tarefa?</h3>
          <h4 className="h4new">Digite a nova descrição da tarefa:</h4>
          <C.InputEdit
            type="text"
            checked={isChecked}
            onChange={(e) => setNewName(e.target.value)}
          />
          <C.Button
            edit={isEdit}
            className="buttonStyle"
            onClick={() => validaUpdate(isChecked)}
          >
            Confirmar
          </C.Button>
        </IsModal>
      ) : (
        <IsModal
          isOpen={valueModal}
          onRequestClose={handleModalClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h3>Você deseja deletar está tarefa?</h3>
          <C.Button
          edit={isEdit}
            className="buttonStyle"
            onClick={() => validaDelete(isChecked)}
          >
            Confirmar
          </C.Button>
        </IsModal>
      )}
    </C.Container>
  );
}
