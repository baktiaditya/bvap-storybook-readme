import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Button = styled('button')`
  padding: 5px;
  font-size: 15px;
  margin: 1px;
  border: 2px solid black;
  border-radius: 3px;

  color: ${props => {
    if (props.alert || props.success) return 'white';
    return 'black';
  }};

  background: ${props => {
    if (props.alert) return 'red';
    if (props.success) return 'green';

    return 'white';
  }};
`;

Button.propTypes = {
  alert: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  success: PropTypes.bool,
};

export default Button;
