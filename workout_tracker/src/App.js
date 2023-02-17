import { ExerciseForm } from './components/exercise/ExerciseForm';
import { WorkoutForm } from './components/workout/WorkoutForm';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './components/authentication/LoginPage';

function App() {
  let exercise = {
    name: "Test",
    setList: [],
    notes: "Testing",
    muscleGroup: ""
  }

  // <ExerciseForm exercise={exercise} onSubmit={null}/>

  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
