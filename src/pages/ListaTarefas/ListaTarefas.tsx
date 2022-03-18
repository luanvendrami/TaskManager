import { useEffect, useState } from "react";
import { AddArea } from "../../components/AddArea";
import { ListItem, ListItemMemoized } from "../../components/ItemList";
import { db } from "../../firebase";
import * as C from "./styled";

import voltar from "../../assets/voltar.svg";

import { useNavigate } from "react-router-dom";
import { ButtonGrid } from "../../components/ButtonGrid";
import { IDados } from "../../interface/IDados";
import { IsModal } from "../../components/Modal";
import {
  createTarefa,
  deleteTarefa,
  getTarefas,
} from "../../service/ListaTarefas";

export function ListaTarefas() {
  const [list, setList] = useState<IDados[]>([]);
  const [newName, setNewName] = useState("");
  const [valueModal, setValueModal] = useState(false);
  const [valueOnClickButton, setValueOnClickButton] = useState<
    string | number
  >();
  const [buttonDeleteView, setButtonDeleteView] = useState<boolean>(false);
  const navigation = useNavigate();

  function handleModalClose() {
    setValueModal(false);
  }

  const validaDelete = () => {
    list.filter((item) => item.id !== valueOnClickButton);
    deleteTarefa(valueOnClickButton, setList);
  };

  const validaDeleteTodas = (lista: IDados[]) => {
    const filtroLista = lista.filter(
      (item) => item.id !== 0 && item.checked === true
    );
    if (filtroLista.length > 1) {
      filtroLista.forEach((itemRestante) =>
        deleteTarefa(itemRestante.id, setList)
      );
      setButtonDeleteView(false);
    }
  };

  const validaCheckBox = (e: any, item?: IDados) => {
    const listCheckBox = list.map((value) => {
      if (value.id === item?.id) {
        return { ...item, checked: e.target.checked };
      }
      return value;
    });
    mostrarBotaoDeleteTodas(listCheckBox);
    setList(listCheckBox);
  };

  const mostrarBotaoDeleteTodas = (lista: IDados[]) => {
    const filtroLista = lista.filter((item) => item.checked === true);
    if (filtroLista.length > 1) {
      setButtonDeleteView(true);
    } else {
      setButtonDeleteView(false);
    }
  };

  useEffect(() => {
    getTarefas().then((response) => setList(response));
  }, [db]);

  return (
    <C.Container checked={buttonDeleteView}>
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
          <button
            hidden={true}
            className="buttonDeleteTodas"
            onClick={() => validaDeleteTodas(list)}
          >
            Apagar Selecionadas
          </button>
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
          <button onClick={() => createTarefa(newName, setList, setNewName)}>
            Adicionar
          </button>
        </AddArea>
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
