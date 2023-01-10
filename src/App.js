import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from './context';
import Navbar from './components/Navbar';
import ClothePage from './components/ClothePage';

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

        <Routes>
          <Route path='/' element={<ClothePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
