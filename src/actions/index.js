export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CREATE_TODO = 'CREATE_TODO';

let id = 0;

export function selectFilter(filter) {
  return {
    type: filter
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  };
}

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text: text,
    id: ++id
  }
}
