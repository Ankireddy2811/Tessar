import React, { useState } from 'react';
import './index.css'; 

const Home = () => {
  const [text, setText] = useState('Welcome');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#000000');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  return (
    <div className="container">
      <div className="left-side">
        <div
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
            color: fontColor
          }}
          className="movable-text"
        >
          {text}
        </div>
      </div>
      <div className="right-side">
      
        <textarea rows={10} cols={55}
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text"
          className='text-input'
        />
      
      <div className="input-group">
        <label className="label-text font-size ">Font Size:</label>
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          className='input-ele'
        />
      </div>
      <div className="input-group">
        <label className="label-text font-family">Font Family:</label>
        <select value={fontFamily} onChange={handleFontFamilyChange} className='input-ele'>
          <option value="Arial">Arial</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Roboto">Roboto</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
         
        </select>
      </div>
      <div className="input-group">
        <label className="label-text font-color">Font Color:</label>
        <input
          type="color"
          value={fontColor}
          onChange={handleFontColorChange}
          className='input-ele'
        />
      </div>
      </div>
    </div>
  );
}

export default Home;
