import { useEffect, useState } from "react";
import { AddArea } from "../../components/AddArea";
import { ListItemMemoized } from "../../components/ItemList";
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

import { Tooltip } from "../../components/Tooltip";

export function ListaTarefas() {
  const [list, setList] = useState<IDados[]>([]);
  const [newName, setNewName] = useState("");
  const [valueModal, setValueModal] = useState(false);
  const [valueOnClickButton, setValueOnClickButton] = useState<
    string | number
  >();
  const [valueOnClickButtonEdit, setValueOnClickButtonEdit] = useState<
    string | number
  >();
  const [modalStyle, setModalStyle] = useState<number>();
  const [buttonDeleteView, setButtonDeleteView] = useState<boolean>(false);
  const navigation = useNavigate();

  function handleModalClose() {
    setValueModal(false);
  }

  const validaDelete = () => {
    list.filter((item) => item.id !== valueOnClickButton);
    deleteTarefa(valueOnClickButton, setList);
    setButtonDeleteView(false);
  };

  const validaDeleteTodas = (lista: IDados[]) => {
    const filtroLista = lista.filter(
      (item) => item.id !== 0 && item.checked === true
    );
    if (filtroLista.length > 1) {
      filtroLista.forEach((itemRestante) =>
        deleteTarefa(itemRestante.id, setList)
      );
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
          <button
            onClick={() => {
              createTarefa(newName, setList, setNewName);
              setButtonDeleteView(false);
            }}
          >
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

            <C.DivDelete checked={item.checked} key={index}>
              <ButtonGrid
                disabled={false}
                className="button"
                onClick={() => {
                  if (item.checked) {
                    setValueOnClickButton(item.id);
                    setModalStyle(0);
                    setValueModal(true!);
                  }
                }}
              >
                Deletar
              </ButtonGrid>
            </C.DivDelete>
            <C.DivEditar checked={item.checked} key={index}>
              <ButtonGrid
                disabled={false}
                className="button"
                onClick={() => {
                  if (item.checked) {
                    setValueOnClickButtonEdit(item.id);
                    setModalStyle(1);
                    setValueModal(true!);
                    console.log(valueOnClickButtonEdit);
                  }
                }}
              >
                Editar
              </ButtonGrid>
            </C.DivEditar>
            <Tooltip>teste</Tooltip>
            <IsModal
              modalStyle={modalStyle}
              isOpen={valueModal}
              onRequestClose={handleModalClose}
              functionActions={() => {
                validaDelete();
                setValueModal(false);
              }}
            >
              {modalStyle === 0 ? (
                <C.ContainerInputDelete>
                  <h3>Exclusão de tarefa</h3>
                  <h4>Você realmente deseja excluir está tarefa?</h4>
                </C.ContainerInputDelete>
              ) : modalStyle === 1 ? (
                <C.ContainerInputEdit>
                  <h3>Edição de Tarefa</h3>
                  <h4>Digite a nova tarefa:</h4>
                  <C.InputEdit></C.InputEdit>
                </C.ContainerInputEdit>
              ) : (
                "Vazio"
              )}
            </IsModal>
          </ListItemMemoized>
        ))}
      </C.Area>
    </C.Container>
  );
}
