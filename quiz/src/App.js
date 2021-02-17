import React from 'react';

import './App.css';
import HOMECOMPONENT from './components/HOMECOMPONENT';
import QUIZCOMPONENT from './components/QUIZCOMPONENT';
import RESULTCOMPONENT from './components/RESULTCOMPONENT'
function App() {
  return (
    <div className="App">
      <HOMECOMPONENT />
      <QUIZCOMPONENT />
      <RESULTCOMPONENT />
    </div>
  );
}

export default App;