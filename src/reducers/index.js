import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED,
         TOGGLE_TODO, CREATE_TODO } from '../actions';
import { combineReducers } from 'redux';

function selectedFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SHOW_ACTIVE:
    case SHOW_COMPLETED:
    case SHOW_ALL:
      return Object.assign({}, state, {
        selectedFilter: action.filter
      });
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat([{
        id: action.id,
        isCompleted: false,
        text: action.text
      }]);
    case TOGGLE_TODO:
      return state.map(todo => {
        todo.id == action.id ? Object.assign({}, todo, {
          isCompleted: !todo.isCompleted
        }) : todo;
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedFilter,
  todos
})

export default rootReducer;
