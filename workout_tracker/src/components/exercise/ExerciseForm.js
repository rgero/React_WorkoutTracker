import React, {useState, useEffect} from 'react';

import '../../styles/components/inputs.css'
import '../../styles/components/Exercise.css'
import { SetList } from '../set/SetList';

export const ExerciseForm = ({exercise = {}, onSubmit})=> 
{
    const [setList, setSetList] = useState(exercise.setList ? exercise.setList : []);
    const [muscleGroup, setMuscleGroup] = useState(exercise.muscleGroup ? exercise.muscleGroup : []);
    const [name, setExerciseName] = useState(exercise.name ? exercise.name : "");
    const [notes, setNotes] = useState(exercise.notes ? exercise.notes : "");
    const [error, setError] = useState("");

    useEffect(()=> {
        var testSets = [
            { reps: 10, weight: 200},
            { reps: 10, weight: 180},
            { reps: 10, weight: 160},
            { reps: 10, weight: 140},
            { reps: 10, weight: 120},
        ]

        setSetList(testSets);
    }, setSetList)

    return (
        <div>
            <div className='exerciseHeader'>
                Add an Exercise
            </div>
            <div className="content">
                <form className="form" onSubmit={onSubmit}>
                    {error !== '' && <p className="form__error">{error}</p>}
                    
                    {/* Name */}
                    <div className="input-entry">
                        <label>Exercise Name</label>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Exercise Name"
                            autoFocus
                            value={name}
                            onChange={e => setExerciseName(e.target.value)}
                        />
                    </div>

                    {/* Muscle Group */}
                    <div className="input-entry">
                        <label>Muscle Group</label>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Muscle Group"
                            value={muscleGroup}
                            onChange={e => setMuscleGroup(e.target.value)}
                        />
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

                    <SetList setList={setList}/>

                    <div>
                        <button className="button">Save Exercise</button>
                    </div>
                </form>
            </div>
        </div>
    )
}