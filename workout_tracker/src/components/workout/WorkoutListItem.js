import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import DateFormatter from '../../helpers/DateFormatter';

export const WorkoutListItem = ({workout, index}) => {
    let {workoutDate, notes, exerciseList} = workout;
    workoutDate = new Date(workoutDate);
    
    return (
        <div>
            <Accordion defaultActiveKey={index}>
                <Accordion.Item>
                    <Accordion.Header>{DateFormatter(workoutDate)}</Accordion.Header>
                    <Accordion.Body>
                        <div>{notes}</div>
                        <div>Total Exercises: {exerciseList.length}</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}