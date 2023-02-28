import {useContext} from 'react';
import {Context as ExerciseContext} from '../../context/ExerciseContext';

export const ProcessExerciseList = async (exerciseList) => {
    const {state, fetchExerciseByID} = useContext(ExerciseContext);
    let exerciseObjects = [];

    for(const id in exerciseList)
    {
        await fetchExerciseByID(id);
        console.log(state);
    }
}