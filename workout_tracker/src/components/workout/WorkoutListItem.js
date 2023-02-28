import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DateFormatter from '../../helpers/DateFormatter';

export const WorkoutListItem = ({workout, index}) => {
    let {workoutDate, notes, exerciseList} = workout;
    workoutDate = new Date(workoutDate);

    const viewWorkout = () => {
        console.log(workout._id);
    }
    
    const deleteWorkout = () => {
        console.log(workout._id);
    }
   
    return (
        <div>
            <Accordion defaultActiveKey={index}>
                <Accordion.Item>
                    <Accordion.Header>{DateFormatter(workoutDate)}</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                <Col sm={4}>Notes</Col>
                                <Col>{notes}</Col>
                            </Row>
                            <Row className="pb-4">
                                <Col sm={4}>Total Exercises</Col>
                                <Col>{exerciseList.length}</Col>
                            </Row>
                            <Row>
                                <Col sm={10}><Button variant="outline-primary" onClick={viewWorkout}>View</Button></Col>
                                <Col sm={2}><Button variant="outline-danger" onClick={deleteWorkout}>Delete</Button></Col>
                            </Row>                           
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}