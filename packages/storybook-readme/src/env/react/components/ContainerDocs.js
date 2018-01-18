import React from 'react';
import PropTypes from 'prop-types';

const ContainerDocs = props => {
  const defaultStyle = {
    padding: 20,
  };

  return (
    <div
      {...props}
      id="container-docs"
      style={{
        ...defaultStyle,
        ...props.style,
      }}
    />
  );
};

ContainerDocs.propTypes = {
  style: PropTypes.object,
};

export default ContainerDocs;
