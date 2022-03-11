import { useState } from 'react'
import api from '../../service/api'
import * as C from './styled'

type Props={
    name: string,
    done: boolean
}

export function AddArea() {

    const [save, setSave] = useState('')
    
    async function onSubmit(){
        if(save !== ''){
            await api.post<Props>("/Cadastro", {
                name: save,
                done: false
            });
            setSave('');
        }       
    }

    return (
        <C.Container>
            <div className="image">✚</div>
            <input type="text"
            maxLength={100}
            placeholder="Adicione uma tarefa"
            value={save}
            onChange={e => setSave(e.target.value)}
            />
            <button onClick={() => onSubmit()}>Adicionar</button>
        </C.Container>
    )
}