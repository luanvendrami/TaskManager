import { useEffect, useState } from 'react';
import { AddArea } from '../components/AddArea';
import { ListItem } from '../components/ItemList';
import { IDados } from '../interface/IDados';
import api from '../service/api';
import * as C from './styled'

export function Home() {
  const [list, setList] = useState<IDados[]>([]);

  useEffect(()=>{
    getApi()
  },[list])

  async function getApi(): Promise<void> {
    const response = await api.get("/Cadastro");
    setList(response.data);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>  
        <AddArea/>
          {list.map((item, index) =>(
            <ListItem key={index} item={item}/>
          ))}
      </C.Area>
    </C.Container>
  );
}