import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as AuthProvider, Context as AuthContext} from '../src/context/AuthContext'
import { Provider as WorkoutProvider} from '../src/context/WorkoutContext'

import NavigationBar from "./components/Header";
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import { LoginPage } from './pages/authentication/LoginPage';
import { SignUpPage } from './pages/authentication/SignUpPage';
import { AddWorkoutPage } from './pages/workouts/AddWorkoutPage';
import { EditWorkoutPage } from './pages/workouts/EditWorkoutPage';
import WorkoutDetailPage from './pages/workouts/ViewWorkoutDetailPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <NavigationBar/>
      <WorkoutProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<IndexPage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="signup" element={<SignUpPage/>} />
            <Route path="dashboard" element={<DashboardPage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="create" element={<AddWorkoutPage/>} />
            <Route path="edit/:id" element={<EditWorkoutPage/>} />
            <Route path="view/:id" element={<WorkoutDetailPage/>} />
          </Routes>
        </BrowserRouter>
      </WorkoutProvider>
    </AuthProvider>
  );
}

export default App;
