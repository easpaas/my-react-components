import React from 'react';

import './my-button.styles.css';

const MyButton = ({type, text}) => {
  return (
    <button className={`${type} default-style`}>
      {text}
    </button>
  )
}

export default MyButton;