import React from 'react';

import '../../styles/components/set/SetList.css';

import { ExerciseListItem } from '../exercise/ExerciseListItem';

export const ExerciseList = ({exerciseList = []})=> 
{
    return (
        <div className="setList">
            {
                exerciseList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Sets</span>
                    </div>
                ) : (
                    <div>
                        {
                            exerciseList.map((exercise) => (
                            <ExerciseListItem
                                exercise={exercise}
                            />))
                        }
                    </div>
                )
            }
        </div>
    )
}