import { useState } from 'react';
import * as C from './app.styles';
import { Item } from './types/item';
import { ListItem } from './components/listItem/index';
import { AddArea } from './components/addArea';


const App = () =>{
  const [list,SetList] = useState<Item[]>([
    {id: 1, name: 'comprar o pao na padaria', done: false},
    {id: 2, name: 'comprar o bolo na padaria', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    SetList(newList);
 
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    SetList(newList);
  }

  return(
    <C.container>
      <C.Area>
        <C.Header>
          lista de tarefas
        </C.Header>

        {/* area de adicionar nova tarefa */}

        <AddArea onEnter={handleAddTask} />

        {/* Lista de tarefas */}

        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item} 
            onChange={handleTaskChange}
          />
        ))}


      </C.Area>
    </C.container>

  );
}

export default App