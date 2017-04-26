import React from 'react';

const Link = ({active, onClick, children, filter}) => {
  if (active) {
    return <span>{children}</span>;
  };
  return (
    <a onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
