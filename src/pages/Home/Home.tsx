import { useNavigate } from "react-router-dom";
import * as C from "./styled";

export function Home() {
  const navigation = useNavigate();

  function ListaTarefas() {
      navigation("/lista_tarefas")
  }

  return (
    <C.Container>     
        <C.Header>Bem vindo</C.Header>
      <button type="button" className="button-80" onClick={() => ListaTarefas()}>Lista de Tarefas</button>
    </C.Container>
  );
}
