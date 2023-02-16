import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import { SetListHeader } from '../set/SetListHeader';

export const ExerciseListItem = ({exercise = {}})=> 
{
    let exerciseName = exercise.name;
    let setList = exercise.setList;
    return (
        <div>
            {
                setList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Sets</span>
                    </div>
                ) : (
                    <div>
                        {exerciseName}
                        {
                            <ListGroup>
                                <ListGroup.Item><SetListHeader/></ListGroup.Item>
                                {
                                    setList.map((set, index) => (
                                        <ListGroup.Item>
                                            <div className="setListItem">
                                                <div>
                                                    {set.reps}
                                                </div>
                                                <div>
                                                    {set.weight}
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        }
                    </div>
                )
            }
        </div>
    )
}