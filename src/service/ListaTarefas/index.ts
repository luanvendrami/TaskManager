import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  endAt,
  query,
  orderBy,
} from "@firebase/firestore";
import { SetStateAction } from "react";
import { db } from "../../firebase";
import { IDados } from "../../interface/IDados";

const tarefasCollectionRef = collection(db, "tarefas");

export const getTarefas = async () => {
  const data = await getDocs(tarefasCollectionRef);
  return data.docs
    .map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      } as IDados;
    })
    .sort((a, b) => ("" + a.id).localeCompare(b.id.toString()));
};

export const deleteTarefa = async (
  id: any,
  setList: React.Dispatch<React.SetStateAction<IDados[]>>
) => {
  const tarefaDoc = doc(db, "tarefas", id);
  await deleteDoc(tarefaDoc)
    .then(() => getTarefas().then((response) => setList(response)))
    .catch((error) => console.log(error));
};

export const createTarefa = async (
  name: string,
  setlista: React.Dispatch<React.SetStateAction<IDados[]>>,
  setName: React.Dispatch<React.SetStateAction<string>>
) => {
  if (name !== "") {
    await addDoc(tarefasCollectionRef, { name: name })
      .then(() => getTarefas().then((response) => setlista(response)))
      .catch((error) => console.log(error));
    setName("");
  }
};

export const updateTarefaName = async (
  id: any,
  updateName: string,
  setList: React.Dispatch<React.SetStateAction<IDados[]>>
) => {
  const tarefaDoc = doc(db, "tarefas", id);
  const newFields = { name: updateName };
  await updateDoc(tarefaDoc, newFields)
    .then(() => getTarefas().then((response) => setList(response)))
    .catch((error) => console.log(error));
};

export const updateTarefaStatus = async (
  id: any,
  updateStatus: boolean,
  setList: React.Dispatch<React.SetStateAction<IDados[]>>
) => {
  const tarefaDoc = doc(db, "tarefas", id);
  const newFields = { status: updateStatus };
  await updateDoc(tarefaDoc, newFields)
    .then(() => getTarefas().then((response) => setList(response)))
    .catch((error) => console.log(error));
};
