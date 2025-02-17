import React, { useState } from 'react';

const StyleChanger = () => {
  const [style, setStyle] = useState({
    backgroundColor: 'lightgray',
    color: 'darkslategray',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'normal',
  });

  const changeStyle = () => {
    // Create a mutable copy of the state
    const mutableStyle = { ...style };

    // Mutate the copy
    mutableStyle.backgroundColor =
        mutableStyle.backgroundColor === 'lightgray' ? 'lightblue' : 'lightgray';
    mutableStyle.color = mutableStyle.color === 'darkslategray' ? 'indigo' : 'darkslategray';
    mutableStyle.fontSize = mutableStyle.fontSize === '18px' ? '22px' : '18px';
    mutableStyle.fontWeight = mutableStyle.fontWeight === 'normal' ? 'bold' : 'normal';

    // Update state with the mutated object
    setStyle(mutableStyle);
  };

  return (
      <div>
        <button onClick={changeStyle}>Toggle Style</button>
        <p style={style}>This is a paragraph with a toggling style.</p>
      </div>
  );
};

export default StyleChanger;
