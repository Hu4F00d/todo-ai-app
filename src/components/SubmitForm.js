import React from 'react';

export default class SubmitForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input ref={node => input = node}></input>
        <button type='submit'>Add Todo</button>
      </form>
    );
  }
};
