import { ExerciseForm } from './components/exercise/ExerciseForm';
import { WorkoutForm } from './components/workout/WorkoutForm';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

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
      <ExerciseForm/>
    </div>
  );
}

export default App;
