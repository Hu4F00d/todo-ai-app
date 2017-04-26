import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, SHOW_COMPLETED, SHOW_ALL, SHOW_ACTIVE } from '../actions';

import Todo from '../components/Todo';

function getVisibleTodos(todos, selectedFilter) {
  switch (selectedFilter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.isCompleted)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.isCompleted)
    default:
      return todos
  }
}

const TodoList = ({ todos, onClick }) => (
  <ul>
    {todos.map(todo => <Todo text={todo.text} onClick={onClick} />)}
  </ul>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(toggleTodo(id))
  };
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.selectedFilter)
  };
};

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodos;
