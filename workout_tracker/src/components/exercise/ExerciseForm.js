import React, {useState, useEffect} from 'react';

import '../../styles/components/inputs.css'
import '../../styles/components/Exercise.css'
import { SetForm } from '../set/SetForm';
import { SetList } from '../set/SetList';

import Form from 'react-bootstrap/Form';

export const ExerciseForm = ({exercise = {}, onSubmit})=> 
{
    const [setList, setSetList] = useState(exercise.setList ? exercise.setList : []);
    const [muscleGroup, setMuscleGroup] = useState(exercise.muscleGroup ? exercise.muscleGroup : []);
    const [name, setExerciseName] = useState(exercise.name ? exercise.name : "");
    const [notes, setNotes] = useState(exercise.notes ? exercise.notes : "");

    useEffect(()=> {
        var testSets = [
            { id: 1, reps: 10, weight: 200},
            { id: 2, reps: 10, weight: 180},
            { id: 3, reps: 10, weight: 160}
        ]
        var notes = "This is a long one"
        var muscleGroup = "Name is this"
        var name = "Chest Now"
        setSetList(testSets);
        setExerciseName(name);
        setNotes(notes);
        setMuscleGroup(muscleGroup)
    }, [setSetList, setExerciseName, setNotes, setMuscleGroup])

    const addSet = (set) => {
        setSetList([...setList, set]);
    }
    
    const deleteSet = (id) => {
        setSetList( (prevSetList) => {
            const index = setList.findIndex((target)=> target.id == id);
            prevSetList.splice(index,1);
            return [...prevSetList];
        })
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setExerciseName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Muscle Group</Form.Label>
                    <Form.Control type="text" value={muscleGroup} onChange={e => setMuscleGroup(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" value={notes} rows={3} onChange={e => setNotes(e.target.value)} />
                </Form.Group>
            </Form>
            <SetForm onSubmit={addSet}/>
            <SetList setList={setList} onDelete={deleteSet}/>
        </div>
    )
}