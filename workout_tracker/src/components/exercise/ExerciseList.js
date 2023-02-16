import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { ExerciseListItem } from '../exercise/ExerciseListItem';

export const ExerciseList = ({exerciseList = [], onDelete})=> 
{
    return (
        <div className="setList">
            {
                exerciseList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Exercises</span>
                    </div>
                ) : (
                    <div>
                        <ListGroup>
                        {
                            exerciseList.map((exercise, index) => (
                                <ListGroup.Item action onClick={(e) => onDelete(index)}>
                                    <ExerciseListItem
                                        exercise={exercise}
                                    />
                                </ListGroup.Item>
                            ))
                        }
                        </ListGroup>

                    </div>
                )
            }
        </div>
    )
}