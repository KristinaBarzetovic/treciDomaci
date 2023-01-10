import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from './context';
import Navbar from './components/Navbar';
import ClothePage from './components/ClothePage';
import BrandsPage from './components/BrandsPage';
import LoginPage from './components/LoginPage';
import CreateClothePage from './components/CreateClothePage';

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
          {
            user && (
              <Route path='/create-clothe' element={<CreateClothePage />} />
            )
          }
          <Route path='/login' element={<LoginPage />} />
          <Route path='/brands' element={<BrandsPage />} />
          <Route path='/' element={<ClothePage />} />

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
