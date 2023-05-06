import { useState } from 'react';
import './style.css'
import Button from './components/button';
import Title from './components/title';
import Input from './components/input';
import List from './components/list';
// import './scripts.js';
function App() {
  //We set the beggining input entry to null
  const[input,setInput] = useState("");
  //We set variable list to an initial null array
  const[lists,setLists] = useState([]);

  //Function click Event will store your input in an array
  const handleClick = () => {
    const id = lists.length + 1;
    setLists((arrayList) => [
      ...arrayList,
      {
        id: id, //id equivaldra a la longitud de la matriz inicial
        task: input, //entrada del usuario
      }
    ]);
    setInput(""); //Despues de hacer click al boton nuestra entrada se borrara

  }
  
  return (
    <>
      <div className="container">
      {/* Retornamos nuestras etiquetas JSX antes creada */}
      <Title />
      {/* Pasamos los valores a los props creados */}
        <Input val={input} oninput={(e) => setInput(e.target.value)} />
        {/* A nuestro JSX Button le agregamos la funcion handleClick() para que ejecute las */}
      <Button click={() => {handleClick()}} val="Add"/>
        
    </div>
    <div className="task-container">
    <h2>TASKS</h2>
    {/* Recorremos nuestra lista en busca de la entrada que el usuario introdujo */}
    {lists.map((todo) => {
      /*
      Retornamos una Lista ahora (todo) contiene la entrada del
      usuario, para acceder simplemente hacemos
      todo.task
      */
      return <List val={todo.task}/>
    })}
    </div>
    </>
  );
}

export default App;
