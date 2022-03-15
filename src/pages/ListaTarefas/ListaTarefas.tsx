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
  endAt,
} from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export function ListaTarefas() {
  const [newName, setNewName] = useState("");
  const [newDone, setDone] = useState(Boolean);

  const [list, setList] = useState([]);
  const tarefasCollectionRef = collection(db, "tarefas");

  const navigation = useNavigate();

  const createTarefa = async () => {
    await addDoc(tarefasCollectionRef, { name: newName, done: newDone })
      .then(() => getTarefas())
      .catch((error) => console.log(error));
    setNewName("");
  };

  const deleteTarefa = async (id: any) => {
    const tarefaDoc = doc(db, "tarefas", id);
    await deleteDoc(tarefaDoc)
      .then(() => getTarefas())
      .catch((error) => console.log(error));
  };

  const updateTarefa = async (id: any, name: string) => {
    const tarefaDoc = doc(db, "tarefas", id);
    const newFields = { name: name };
    await updateDoc(tarefaDoc, newFields)
      .then(() => getTarefas())
      .catch((error) => console.log(error));
  };

  const updateTarefaFinalizada = async (id: any, done: boolean) => {
    const tarefaDoc = doc(db, "tarefas", id);
    const newFields = { done: done };
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
          <button
            type="button"
            onClick={() => RetornarHome()}
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
        {list.map((item, index) => (
          <ListItem key={index} item={item} deleteTarefa={deleteTarefa} />
        ))}
      </C.Area>
      <C.BoxInformacoes>
        <h3>Quantas finalizadas: Quantas em andamento:</h3>
      </C.BoxInformacoes>
    </C.Container>
  );
}
