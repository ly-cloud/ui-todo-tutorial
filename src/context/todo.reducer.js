import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case DELETE_TODO:
      const newList = {
        ...state.todos,
      };
      delete newList[data];
      return { ...state, todos: newList };
    case UPDATE_TODO:
      const editList = {
        ...state.todos,
      };
      editList[data.id].description = data.description;
      return { ...state, todos: editList };
    default:
      return state;
  }
};
