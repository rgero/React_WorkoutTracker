import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider as AuthProvider, Context as AuthContext} from '../src/context/AuthContext'
import Dashboard from './components/DashboardPage';
import { LoginPage } from './components/authentication/LoginPage';
import { SignUpPage } from './components/authentication/SignUpPage';

function App() {
  const context = useContext(AuthContext);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element= {<LoginPage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="signup" element={<SignUpPage/>} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
