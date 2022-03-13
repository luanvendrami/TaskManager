import { useEffect, useState } from "react";
import { AddArea } from "../../components/AddArea";
import { ListItem } from "../../components/ItemList";
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
} from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export function ListaTarefas() {
  const [newName, setNewName] = useState("");
  const [newDone, setDone] = useState(false);
  const [list, setList] = useState([]);
  const tarefasCollectionRef = collection(db, "tarefas");
  const [valueDelete, setValueDelete] = useState();
  const [valueUpdate, setValueUpdate] = useState();
  const navigation = useNavigate();

  const createTarefa = async () => {
    setDone(false);
    await addDoc(tarefasCollectionRef, { name: newName, done: newDone })
      .then(() => getTarefas())
      .catch((error) => console.log(error));
    setNewName("");
  };

  const deleteTarefa = async (id: any) => {
    const tarefaDoc = doc(db, "tarefas", id);
    setValueDelete(id);
    await deleteDoc(tarefaDoc)
      .then(() => getTarefas())
      .catch((error) => console.log(error));
  };

  const updateTarefa = async (id: any, name: string) => {
    const tarefaDoc = doc(db, "tarefas", id);
    const newFields = { name: name };
    setValueUpdate(id);
    await updateDoc(tarefaDoc, newFields)
      .then(() => getTarefas())
      .catch((error) => console.log(error));
  };

  const getTarefas = async () => {
    const data = await getDocs(tarefasCollectionRef);
    setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as never[]);
  };

  function RetornarHome() {
    navigation(-1);
  }

  useEffect(() => {
    getTarefas();
  }, [db]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
          <C.DivFlutuante>         
          <button
          type="button"
          onClick={() => RetornarHome()} 
          className="react-button-voltar"
        >
          <img src={voltar} alt="Voltar Home" />
        </button>

          </C.DivFlutuante>
          </C.Header>
        <AddArea>
          <div className="image">✚</div>
          <input
            type="text"
            maxLength={100}
            placeholder="Adicione uma tarefa"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={() => createTarefa()}>Adicionar</button>
        </AddArea>
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            deleteTarefa={deleteTarefa}
            updateTarefa={updateTarefa}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}
