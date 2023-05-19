import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { ExerciseListItem as EditItem } from './ExerciseListEditItem';
import { ExerciseListItem as ViewItem } from './ExerciseListViewItem';

export const ExerciseList = ({exerciseList = [], onDelete=null})=> 
{
    return (
        <Container>
            {
                exerciseList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Exercises</span>
                    </div>
                ) : (
                    <ListGroup style={{width:"60%", margin:"auto"}} variant="flush">
                    {
                        exerciseList.map((exercise, index) => (
                            <ListGroup.Item style={{border: "0px"}} action={onDelete!==null} key={`${exercise.name}_${index}`}>
                                { onDelete === null ? (
                                    <ViewItem
                                        index={index+1}
                                        exercise={exercise}
                                    />
                                ) : (
                                    <EditItem
                                        index={index+1}
                                        exercise={exercise}
                                        onDelete={onDelete}
                                    />
                                )}
                            </ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                )
            }
        </Container>
    )
}