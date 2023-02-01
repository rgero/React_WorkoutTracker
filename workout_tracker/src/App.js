import { ExerciseForm } from './components/exercise/ExerciseForm';
import { SetForm } from './components/set/SetForm';
import './styles/App.css';

function App() {
  let exercise = {
    name: "Test",
    setList: [],
    notes: "Testing",
    muscleGroup: ""
  }

  return (
    <div className="App">
      <ExerciseForm exercise={exercise} onSubmit={null}/>
    </div>
  );
}

export default App;
