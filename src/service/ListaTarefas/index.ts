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
      const [name] = Object.values(doc.data());
      return {
        id: doc.id,
        checked: false,
        name,
        done: false,
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

export const updateTarefa = async (
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
