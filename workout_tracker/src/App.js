import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider as AuthProvider, Context as AuthContext} from '../src/context/AuthContext'
import { LoginPage } from './components/authentication/LoginPage';
import { ExerciseForm } from './components/exercise/ExerciseForm';
import { WorkoutForm } from './components/workout/WorkoutForm';

function App() {
  const context = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="App">
        <LoginPage/>
      </div>
    </AuthProvider>
  );
}

export default App;
