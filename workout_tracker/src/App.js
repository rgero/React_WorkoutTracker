import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider as AuthProvider, Context as AuthContext} from '../src/context/AuthContext'
import { Provider as WorkoutProvider, Context as WorkoutContext} from '../src/context/WorkoutContext'
import DashboardPage from './pages/DashboardPage';
import IndexPage from './pages/IndexPage';
import { LoginPage } from './components/authentication/LoginPage';
import { SignUpPage } from './components/authentication/SignUpPage';
import { WorkoutForm } from './components/workout/WorkoutForm';
import { AddWorkoutPage } from './components/workout/AddWorkoutPage';

function App() {
  const context = useContext(AuthContext);

  return (
    <AuthProvider>
      <WorkoutProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<IndexPage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="signup" element={<SignUpPage/>} />
            <Route path="dashboard" element={<DashboardPage/>} />
            <Route path="addworkout" element={<AddWorkoutPage/>} />
          </Routes>
        </BrowserRouter>
      </WorkoutProvider>
    </AuthProvider>
  );
}

export default App;
