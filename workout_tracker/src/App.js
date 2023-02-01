import { ExerciseForm } from './components/exercise/ExerciseForm';
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
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ExerciseForm exercise={exercise} onSubmit={null}/>
    </div>
  );
}

export default App;
