import { ExerciseForm } from './components/exercise/ExerciseForm';
import { WorkoutForm } from './components/workout/WorkoutForm';
import './styles/App.css';

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
      <WorkoutForm/>
    </div>
  );
}

export default App;
