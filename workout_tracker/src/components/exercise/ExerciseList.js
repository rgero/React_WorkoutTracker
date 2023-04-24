import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { ExerciseListItem } from '../exercise/ExerciseListItem';

export const ExerciseList = ({exerciseList = [], onDelete})=> 
{
    return (
        <Container>
            {
                exerciseList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Exercises</span>
                    </div>
                ) : (
                    <Container>
                        <ListGroup>
                        {
                            exerciseList.map((exercise, index) => (
                                <ListGroup.Item action>
                                    <ExerciseListItem
                                        exercise={exercise}
                                        onDelete={onDelete}
                                    />
                                </ListGroup.Item>
                            ))
                        }
                        </ListGroup>

                    </Container>
                )
            }
        </Container>
    )
}