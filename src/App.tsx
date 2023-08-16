import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';



function App() {

  const [name, setName] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch('https://localhost:8000/api/user', {
                  headers: {'Content-Type': 'application/json'},
                  credentials: 'include',
              });
  
              const content = await response.json();
  
              setName(content.name);
          }
      )();
  });

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar name={name} setName={setName}/>
          <Routes>
            <Route path='/' Component={() => <Home name={name} />} />
            <Route path='/register' Component={Register} />
            <Route path='/login' Component={() => <Login setName={setName}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
