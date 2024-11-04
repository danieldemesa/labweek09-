import React from 'react';
import './App.css';

function App() {
  const studentDetails = {
    studentID: '101440281',
    name: 'Daniel De Mesa-Borrett',
    college: 'George Brown College, Toronto'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          className="App-logo" 
          alt="React logo" 
        />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <div className="student-info">
          <p>{studentDetails.studentID}</p>
          <p>{studentDetails.name}</p>
          <p>{studentDetails.college}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
