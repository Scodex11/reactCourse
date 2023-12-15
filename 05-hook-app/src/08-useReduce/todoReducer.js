export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    //Por cada caso debemos retornar ÚNICAMENTE el state
    case "[TODO] Add":
      return [...initialState, action.payload];

    case "[TODO] Delete":
      //Solo se incluirán en el nuevo array los elementos cuyo id no coincida con el valor de action.payload.
      //Es decir, siempre que todo.id
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle":
      //Si coinciden los ID, se cambia el valor de done sino se deja igual.

      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return initialState;
  }
};
