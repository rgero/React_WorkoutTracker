import React from 'react';
import Card from 'react-bootstrap/Card';

import DateFormatter from '../../helpers/DateFormatter';

export const WorkoutListItem = ({workout}) => {
    let {workoutDate, notes, exerciseList} = workout;
    workoutDate = new Date(workoutDate);

    return (
        <div>
            <Card bordered="true">
                <Card.Body>
                    <Card.Title>{DateFormatter(workoutDate)}</Card.Title>
                    <Card.Text>{notes}</Card.Text>
                    <Card.Text>Total Exercises: {exerciseList.length}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}