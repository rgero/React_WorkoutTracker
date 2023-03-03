import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as AuthProvider, Context as AuthContext} from '../src/context/AuthContext'
import { Provider as WorkoutProvider} from '../src/context/WorkoutContext'
import { Provider as ExerciseProvider} from '../src/context/ExerciseContext'

import NavigationBar from "./components/Navigation";
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import { LoginPage } from './components/authentication/LoginPage';
import { SignUpPage } from './components/authentication/SignUpPage';
import { AddWorkoutPage } from './components/workout/AddWorkoutPage';
import { EditWorkoutPage } from './components/workout/EditWorkoutPage';
import WorkoutDetailPage from './components/workout/ViewWorkoutDetailPage';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AuthProvider>
      <NavigationBar/>
      <WorkoutProvider>
        <ExerciseProvider>
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
        </ExerciseProvider>
      </WorkoutProvider>
    </AuthProvider>
  );
}

export default App;
