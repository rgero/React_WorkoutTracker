import React from 'react';

import { SetListDisplayItem } from '../set/SetListDisplayItem';

export const ExerciseListItem = ({exercise = {}, onDelete})=> 
{
    let exerciseName = exercise.name;
    let setList = exercise.setList;
    return (
        <div className="setList">
            {
                setList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Sets</span>
                    </div>
                ) : (
                    <div>
                        {exerciseName}
                        {
                            setList.map((set) => (
                            <SetListDisplayItem
                                set={set}
                            />))
                        }
                    </div>
                )
            }
        </div>
    )
}