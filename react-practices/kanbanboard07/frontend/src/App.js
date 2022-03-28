import React, { useState, useEffect } from 'react'
import KanbanBoard from './KanbanBoard';
import './assets/css/App.css';

const App = () => {
  const [card, setcard] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });


      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setcard(json.data);
    } catch (err) {
      cosnoel.log(err);
    }
  }, []);
  return (
    <KanbanBoard cards={card}/>
  )
}

export default App