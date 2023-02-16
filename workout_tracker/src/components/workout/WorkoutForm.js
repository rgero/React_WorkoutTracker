import React, {useState, useEffect} from 'react';
import DatePicker from 'react-date-picker';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

import '../../styles/components/inputs.css'
import '../../styles/components/WorkoutForm.css';

import { ExerciseList } from '../exercise/ExerciseList';

export const WorkoutForm = ({workout = {}, onSubmit})=> 
{
    const [workoutDate, setWorkoutDate] = useState(workout.workoutDate ? workout.workoutDate : new Date());
    const [exerciseList, setExerciseList] = useState(workout.exerciseList ? workout.exerciseList : []);
    const [notes, setNotes] = useState(workout.notes ? workout.notes : "");
    const [error, setError] = useState("");

    useEffect(()=> {
        var testSets = [
            { id: 1, reps: 10, weight: 200},
            { id: 2, reps: 10, weight: 180},
            { id: 3, reps: 10, weight: 160},
            { id: 4, reps: 10, weight: 140},
            { id: 5, reps: 10, weight: 120},
        ]

        var testExercises = [
            {
                name: "Tricep Ext",
                notes: "I got it",
                muscleGroup: "Triceps",
                setList: testSets
            },
            {
                name: "Bicep shocking",
                notes: "Electricity is fun",
                muscleGroup: "Biceps",
                setList: testSets
            }
        ]

        setExerciseList(testExercises);
    }, [setExerciseList])

    const addExercise = (exercise) => {
        setExerciseList([...exerciseList, exercise]);
    }
    
    const deleteExercise = (index) => {
        let newExerciseList = exerciseList;
        newExerciseList.splice(index, 1);
        setExerciseList( [...newExerciseList] );
    }

    return (
        <Container fluid="md">
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text sm>Date</InputGroup.Text>
                    <Form.Control type="date" value={workoutDate} onChange={e => setWorkoutDate(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text sm>Notes</InputGroup.Text>
                    <Form.Control as="textarea" value={notes} rows={3} onChange={e => setNotes(e.target.value)} />
                </InputGroup>
            </Form>
            <div className="exerciseList">
                <ExerciseList exerciseList={exerciseList} onDelete={deleteExercise}/>
            </div>
        </Container>
    )

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>      
                {error !== '' && <p className="form__error">{error}</p>}
                <div className="form__input">
                    <label>Date</label>
                    <DatePicker onChange={setWorkoutDate} value={workoutDate} />
                </div>

                {/* Notes */}
                <div className="input-entry">
                    <label htmlFor='notesSection'>Notes</label>
                    <textarea id='notesSection'
                        placeholder="Add a note about your exercise"
                        className="text-area"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="exerciseList">
                    <ExerciseList exerciseList={exerciseList}/>
                </div>
            </form>
            <div>
                <button className="button">Save Exercise</button>
            </div>
        </div>
    )
}