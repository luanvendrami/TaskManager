import { useNavigate } from "react-router-dom";
import * as C from "./styled";

export function Home() {
  const navigation = useNavigate();

  function ListaTarefas() {
    navigation("/lista_tarefas");
  }

  return (
    <C.Container>
      <body>
        <nav className="navMenu">
          <a href="" >Inicio</a>
          <a href="" onClick={() => ListaTarefas()}>Projeto 1</a>
          <a href="">Contato</a>
          <a href="">Sobre</a>
          <div className="dot"></div>
        </nav>
      </body>
    </C.Container>
    
  );
}
