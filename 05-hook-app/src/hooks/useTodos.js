import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReduce/index";

//Trae los datos del localStorage como objeto para poder usarlo en el useReducer
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

export const useTodos = () => {

  //Usamos el useReducer para manejar el estado de los TODOs
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  
  //Enviamos los datos al localStorage como STRING cada vez que se actualiza 'todos'
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  


  const handleNewTodo = (todo) => {
    //Definimos la acción a realizar
    const action = {
      type: "[TODO] Add",
      payload: todo, //Enviamos el nuevo array que recibe por parámetro
    };

    //Ejecutamos la acción
    dispatch(action);
  };

  const handleDelete = (todoId) => {
    
    const action = {
      type: "[TODO] Delete",
      payload: todoId, //Enviamos el ID que queremos eliminar
    };

    //Ejecutamos la acción
    dispatch(action);
  }

  const handleToggle = (todoId) => {
    const action = {
      type: "[TODO] Toggle",
      payload: todoId, //Enviamos el ID que queremos eliminar
    };

    //Ejecutamos la acción
    dispatch(action);
  }

  const pendingTodos = todos.filter(todo => !todo.done).length;

  return ({
    todos,
    handleNewTodo,
    handleDelete,
    handleToggle,
    pendingTodos
  })
}
