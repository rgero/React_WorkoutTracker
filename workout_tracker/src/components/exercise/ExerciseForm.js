import React, {useState} from 'react';

import '../../styles/components/exercise/ExerciseForm.css'

export const ExerciseForm = ({exercise = {}, onSubmit})=> 
{
    const [setList, setSetList] = useState(exercise.setList ? exercise.setList : []);
    const [muscleGroup, setMuscleGroup] = useState(exercise.muscleGroup ? exercise.muscleGroup : []);
    const [name, setExerciseName] = useState(exercise.name ? exercise.name : "");
    const [notes, setNotes] = useState(exercise.notes ? exercise.notes : "");
    const [error, setError] = useState("");

    return (
        <form className="form" onSubmit={onSubmit}>
            {error !== '' && <p className="form__error">{error}</p>}
            
            {/* Name */}
            <label>Exercise Name</label>
            <input
                type="text"
                className="text-input"
                placeholder="Exercise Name"
                autoFocus
                value={name}
                onChange={setExerciseName}
            />

            {/* Muscle Group */}
            <label>Muscle Group</label>
            <input
                type="text"
                className="text-input"
                placeholder="Muscle Group"
                autoFocus
                value={muscleGroup}
                onChange={setMuscleGroup}
            />

            {/* Notes */}
            <label htmlFor='notesSection'>Notes</label>
            <textarea id='notesSection'
                placeholder="Add a note about your exercise"
                className="textarea"
                value={notes}
                onChange={setNotes}
            >
            </textarea>
            <div>
                <button className="button">Save Exercise</button>
            </div>
        </form>
    )
}