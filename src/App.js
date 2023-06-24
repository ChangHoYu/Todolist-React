import { useState } from 'react';
import Input from './component/Input';
import Todo from './component/Todo';
import Card from './component/UI/Card';
import Title from './component/Title';


function App() {
  const [toDo , setToDo] = useState([
  ]);
  const [id, setId] = useState(0);

  const onCreate = (enteredInput) =>{
    const content = {
      id: id,
      text: enteredInput, 
      check: false
    };
    setId(id+1);
    setToDo((pre)=>[ content, ...pre]);
    console.log(toDo);
  };
  
  const onComplete = (id) => {
    setToDo(toDo.map(todo => todo.id === id ? {...todo, check: true} : todo));
  }

  const onRemove = (id) => {
    setToDo((pre)=>pre.filter(todo=> todo.id !== id))
  }


  return (
    <>
      <Card>
      <Title />
      <Input onCreate={onCreate}/>
      </Card>
      <Card>
      <Todo todo={toDo} onRemove={onRemove} onComplete={onComplete}/>
      </Card>
    </>
  );
}

export default App;
