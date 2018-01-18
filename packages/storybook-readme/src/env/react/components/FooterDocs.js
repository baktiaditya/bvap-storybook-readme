import React from 'react';
import PropTypes from 'prop-types';

const FooterDocs = props => {
  const defaultStyle = {
    paddingTop: 16,
    borderTop: '1px dashed #e5e5e5',
  };

  return (
    <div
      {...props}
      id="footer-docs"
      style={{
        ...defaultStyle,
        ...props.style,
      }}
    />
  );
};

FooterDocs.propTypes = {
  style: PropTypes.object,
};

export default FooterDocs;
