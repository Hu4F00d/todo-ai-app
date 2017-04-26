import React from 'react';

import { connect } from 'react-redux';

import selectFilter from '../actions';

import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.selectedFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
