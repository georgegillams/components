import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledBody,
  StyledTable,
  StyledRow,
  StyledHead,
  StyledCell,
} from './table.styles';

const commonPropTypes = {
  children: PropTypes.node,
};

const commonDefaultProps = {
  children: null,
};

const Table = (props: React.HTMLAttributes<HTMLTableElement>) => {
  return <StyledTable {...props} />;
};

Table.propTypes = {
  ...commonPropTypes,
};

Table.defaultProps = {
  ...commonDefaultProps,
};

const Head = (props: React.HTMLAttributes<HTMLHeadElement>) => {
  return <StyledHead {...props} />;
};

Head.propTypes = {
  ...commonPropTypes,
};

Head.defaultProps = {
  ...commonDefaultProps,
};

const Body = (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <StyledBody {...props} />;
};

Body.propTypes = {
  ...commonPropTypes,
};

Body.defaultProps = {
  ...commonDefaultProps,
};

const Row = (props: React.HTMLAttributes<HTMLTableRowElement>) => {
  return <StyledRow {...props} />;
};

Row.propTypes = {
  ...commonPropTypes,
};

Row.defaultProps = {
  ...commonDefaultProps,
};

const Cell = (props: React.HTMLAttributes<HTMLTableCellElement>) => {
  return <StyledCell {...props} />;
};

Cell.propTypes = {
  ...commonPropTypes,
};

Cell.defaultProps = {
  ...commonDefaultProps,
};

export default Table;
export { Table, Head, Body, Row, Cell };
