import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Backend is working!</p>
          <pre>{JSON.stringify(tasks, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
