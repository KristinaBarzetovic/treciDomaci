import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './context';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(undefined);
  return (

    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
