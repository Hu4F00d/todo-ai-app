import React from 'react';

const Todo = ({text, onClick}) => (
  <li onClick={onClick}>
    <p>{text}</p>
  </li>
);

export default Todo;
