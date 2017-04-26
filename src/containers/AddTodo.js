import React from 'react';

import { connect } from 'react-redux';

import createTodo from '../actions';

import SubmitForm from '../components/SubmitForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(createTodo(input.value));
      input.value = '';
    }
  };
};

const AddTodo = connect(
  mapDispatchToProps
)(SubmitForm);

export default AddTodo;
