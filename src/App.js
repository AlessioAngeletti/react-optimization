import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  // For non-primitive values, the comparison between the previous and the new value returns false
  const toggleParagraphHandler = () => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
