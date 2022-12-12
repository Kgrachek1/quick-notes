import './App.css';
import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage.Jsx';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <>
         <NavBar />
         <Routes>
         {/* Route Components in here*/}
          <Route path="/orders/new" element ={<NewOrderPage/>} />
          <Route path="/orders" element={<OrderHistoryPage />} />

         </Routes>
        </>
        
        //<NewOrderPage />
        :
        <AuthPage />
    }
    </main>
  );
}

