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
};

export function ListItem({ item, deleteTarefa }: Props) {
  const [isChecked, setIsChecked] = useState(Boolean);
  const [isEdit, setIsEdit] = useState(0);
  const [valueModal, setValueModal] = useState(false);

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
      <StepDelete
        valueModal={valueModal}
        handleModalClose={handleModalClose}
        validaDelete={() => validaDelete(isChecked)}
        isEdit={isEdit}
        isChecked={isChecked}
      />
    </C.Container>
  );
}
