import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as AuthProvider} from '../src/context/AuthContext'
import { Provider as WorkoutProvider} from '../src/context/WorkoutContext'
import ProtectedRoute from './components/PrivateRoute';

import NavigationBar from "./components/Header";

import AddWorkoutPage from './pages/workouts/AddWorkoutPage';
import DashboardPage from './pages/DashboardPage';
import EditWorkoutPage from './pages/workouts/EditWorkoutPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/authentication/LoginPage';
import SignUpPage from './pages/authentication/SignUpPage';
import WorkoutDetailPage from './pages/workouts/ViewWorkoutDetailPage';
import UserPage from './pages/authentication/UserPage';

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

            <Route element={<ProtectedRoute/>}>
              <Route path="dashboard" element={<DashboardPage/>} />
              <Route path="create" element={<AddWorkoutPage/>} />
              <Route path="edit/:id" element={<EditWorkoutPage/>} />
              <Route path="view/:id" element={<WorkoutDetailPage/>} />
              <Route path="user" element={<UserPage/>} />
            </Route>

          </Routes>
        </BrowserRouter>
      </WorkoutProvider>
    </AuthProvider>
  );
}

export default App;
