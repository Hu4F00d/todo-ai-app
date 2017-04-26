import React from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions';

import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <p>
    <FilterLink filter={SHOW_ALL}>
      Show All
    </FilterLink>
     ,
    <FilterLink filter={SHOW_ACTIVE}>
      Show Active
    </FilterLink>
     ,
    <FilterLink filter={SHOW_COMPLETED}>
      Show Completed
    </FilterLink>
  </p>
);

export default Footer;
