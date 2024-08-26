import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ValueChange from './newValue';

function App() {
  const [value, setValue] = useState<number>(0)
  return (
    <div>
      <p>Uday</p>
      <ValueChange
        setName={setValue}
        name={value}
      />

    </div>
  );
}

export default App;
