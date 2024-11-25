import React from 'react';
import Provider from './components/Provider';
import './App.css';
import Enter from './components/Enter';
function App() {
  return (
    <div className='App text-center ' >
      <Provider />
      <Enter />
    </div>
  )
}
export default App