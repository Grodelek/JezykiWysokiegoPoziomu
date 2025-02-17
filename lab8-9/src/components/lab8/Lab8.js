import React from 'react';
import ClickCounter from './ClickCounter';
import ClickCounterInvalid from './ClickCounterInvalid';
import MouseOverHandler from './MouseOverHandler';
import ImageDisplay from './ImageDisplay';
import JsonLoader from './JsonLoader';
import FileUploader from './FileUploader';
import StyleChanger from './StyleChanger';

const App = () => {
  return (
    <div className="App">
      <h1>Interakcje z użytkownikiem</h1>
      <h2>Poprawna obsługa stanu</h2>
      <ClickCounter />
      <h2>Niepoprawna obsługa stanu</h2>
      <ClickCounterInvalid />
      <MouseOverHandler />
      <ImageDisplay />
      <JsonLoader />
      <FileUploader />
      <StyleChanger />

      
      
    </div>
  );
};

export default App;
