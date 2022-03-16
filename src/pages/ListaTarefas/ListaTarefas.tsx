import { useEffect, useState } from "react";
import { AddArea } from "../../components/AddArea";
import { ListItem, ListItemMemoized } from "../../components/ItemList";
import { db } from "../../firebase";
import * as C from "./styled";

import voltar from "../../assets/voltar.svg";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  endAt,
} from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ButtonGrid } from "../../components/ButtonGrid";
import { IDados } from "../../interface/IDados";
import { IsModal } from "../../components/Modal";
import { isTemplateExpression } from "typescript";

export function ListaTarefas() {
  const [list, setList] = useState<IDados[]>([]);
  const [newName, setNewName] = useState("");
  const [valueModal, setValueModal] = useState(false);
  const [valueOnClickButton, setValueOnClickButton] = useState(0);
  const [listValueOnClick, setListValueOnClick] = useState(0);
  const tarefasCollectionRef = collection(db, "tarefas");
  const navigation = useNavigate();

  const createTarefa = async () => {
    if (newName !== "") {
      await addDoc(tarefasCollectionRef, { name: newName })
        .then(() => getTarefas())
        .catch((error) => console.log(error));
      setNewName("");
    }
  };

  const deleteTarefa = async (id: any) => {
    const tarefaDoc = doc(db, "tarefas", id);
    await deleteDoc(tarefaDoc)
      .then(() => getTarefas())
      .catch((error) => console.log(error));
  };

  const getTarefas = async () => {
    const data = await getDocs(tarefasCollectionRef);
    setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as never[]);
  };

  function handleModalClose() {
    setValueModal(false);
  }

  const validaDelete = () => {
    const lista = list.filter((item) => item.id !== valueOnClickButton);
    deleteTarefa(valueOnClickButton);
    setList(lista);
  };

  const validaDeleteTodas = (lista: IDados[]) => {
    const filtroLista = lista.filter(
      (item) => item.id !== listValueOnClick && item.checked === true
    );
    filtroLista.forEach((itemRestante) => deleteTarefa(itemRestante.id));
    setList(filtroLista);
  };

  const validaCheckBox = (e: any, item?: IDados) => {
    const listCheckBox = list.map((value) => {
      if (value.id === item?.id) {
        return { ...item, checked: e.target.checked };
      }
      return value;
    });
    setList(listCheckBox);
  };

  useEffect(() => {
    getTarefas();
  }, [db]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          <button
            type="button"
            onClick={() => navigation(-1)}
            className="react-button-voltar"
          >
            <img src={voltar} alt="Voltar Home" />
          </button>
          Lista de Tarefas
        </C.Header>
        <AddArea>
          <div className="image">✚</div>
          <input
            type="text"
            maxLength={85}
            placeholder="Adicione uma tarefa"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={() => createTarefa()}>Adicionar</button>
        </AddArea>
        <button onClick={(e) => validaDeleteTodas(list)}>TESTE</button>
        {list.map((item, index) => (
          <ListItemMemoized key={index}>
            <input
              type="checkbox"
              className="inputPrincipal"
              checked={item.checked}
              onChange={(e) => validaCheckBox(e, item)}
            />
            <label>{item.name}</label>
            <C.DivDelete>
              <ButtonGrid
                disabled={false}
                className="buttonDelete"
                onClick={() => {
                  if (item.checked) {
                    setValueOnClickButton(item.id);
                    setValueModal(true!);
                  }
                }}
              >
                Deletar
              </ButtonGrid>
            </C.DivDelete>
            <IsModal
              isOpen={valueModal}
              onRequestClose={handleModalClose}
              functionActions={() => {
                validaDelete();
                setValueModal(false);
              }}
            />
          </ListItemMemoized>
        ))}
      </C.Area>
    </C.Container>
  );
}
