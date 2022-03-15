import { useEffect, useState } from "react";
import { IDados } from "../../interface/IDados";
import { ButtonGrid } from "../ButtonGrid";
import { StepDelete } from "../Modal/Steps/StepDelete";
import { StepEdit } from "../Modal/Steps/StepEdit";
import { StepFinaliza } from "../Modal/Steps/StepFinaliza";
import * as C from "./styled";

type Props = {
  item: IDados;
  deleteTarefa: (id: number) => void;
  updateTarefa: (id: number, name: string) => void;
  updateTarefaFinalizada:  (id:number, done: boolean) => void;
};

export function ListItem({ item, deleteTarefa, updateTarefa, updateTarefaFinalizada }: Props) {
  const [isChecked, setIsChecked] = useState(Boolean);
  const [isEdit, setIsEdit] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(Boolean);
  const [valueModal, setValueModal] = useState(false);
  const [newName, setNewName] = useState('')
  const [newDone, setDone] = useState(Boolean);

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

  async function validaUpdateFinalizada(isChecked: boolean){
    if (isChecked === true){
      handleModalOpen();
      setIsEdit(2);
      if(valueModal){
      setDone(true)
      updateTarefaFinalizada(item.id, newDone)
      handleModalClose();
      }
      
    } 
  }

  useEffect(() => {
    validaUpdateFinalizada(isChecked)
  },[newDone])

  return (
    <C.Container done={isChecked} finalizada={item.done}>
      <input
        type="checkbox"
        className="inputPrincipal"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>

      <C.DivDelete>
        <ButtonGrid
          disabled={false}
          onClick={() => validaDelete(isChecked)}
          className="buttonDelete"
          isEdit={isEdit}
          isChecked={isChecked}
        >
          Deletar
        </ButtonGrid>
      </C.DivDelete>
      <C.DivEdit>
        <ButtonGrid
        disabled={item.done ? true :false}
        onClick={() => validaUpdate(isChecked)}
        className="buttonEdit"
        isEdit={isEdit}
        isChecked={isChecked}
        >
        Editar
        </ButtonGrid> 
      </C.DivEdit>
      <C.DivFinalizada>
        <ButtonGrid
        disabled={item.done ? true :false}
        onClick={() => validaUpdateFinalizada(isChecked)}
        className="buttonFinalizado"
        isEdit={isEdit}
        isChecked={isChecked}
        >
        Finalizar
        </ButtonGrid>
      </C.DivFinalizada>
      {isEdit === 0 ?(
          <StepEdit
          valueModal={valueModal} 
          handleModalClose={handleModalClose}
          setNewName={setNewName}
          validaUpdate={() => validaUpdate(isChecked)}
          isEdit={isEdit}
          isChecked={isChecked}
          />
      ) : isEdit === 1 ? (
        <StepDelete
          valueModal={valueModal} 
          handleModalClose={handleModalClose}
          validaDelete={() => validaDelete(isChecked)}
          isEdit={isEdit}
          isChecked={isChecked}
        />
      ) : (
        <StepFinaliza
        valueModal={valueModal} 
        handleModalClose={handleModalClose}
        validaUpdateFinalizada={() => validaUpdateFinalizada(isChecked)}
        isEdit={isEdit}
        isChecked={isChecked}
        />
      )}
      
    </C.Container>
  );
}
