import React from 'react';
import PropTypes from 'prop-types';

const StoryPreview = props => {
  const defaultStyle = {
    boxSizing: 'border-box',
    margin: '16px 0',
    padding: 24,
    border: '1px dashed #e5e5e5',
    backgroundColor: '#fff',
    textAlign: 'left',
  };

  return (
    <div
      {...props}
      id="story-preview"
      style={{
        ...defaultStyle,
        ...props.style,
      }}
    />
  );
};

StoryPreview.propTypes = {
  style: PropTypes.object,
};

export default StoryPreview;
