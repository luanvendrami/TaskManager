import { Routes , Route  } from 'react-router-dom'
import { Home } from '../pages/Home/Home';
import { ListaTarefas } from '../pages/ListaTarefas/ListaTarefas';

export const MyRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lista_tarefas" element={<ListaTarefas/>} />
      </Routes> 
    );
  }