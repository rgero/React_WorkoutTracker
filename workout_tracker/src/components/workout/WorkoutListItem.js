import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import DateFormatter from '../../helpers/DateFormatter';
import {AlertBox} from '../../helpers/DialogBox';

import {Context as WorkoutContext} from '../../context/WorkoutContext';

export const WorkoutListItem = ({workout, index}) => {
    let {workoutDate, notes, exerciseList} = workout;
    const navigate = useNavigate();
    const {deleteWorkout} = useContext(WorkoutContext);
    
    const viewWorkout = () => {
        navigate(`/view/${workout._id}`);
    }
    
    const processDelete = () => {
        let title = 'Are you sure you want to delete this?';
        let subtitle = `Workout on ${DateFormatter(workout.workoutDate)} with ${workout.exerciseList.length} exercises`;
        let buttons = [
            {
              label: 'Yes',
              onClick: async () => {
                  await deleteWorkout(workout._id);
              }
            },
            {
              label: 'No'
            }
        ]
        AlertBox(title, subtitle, buttons);
    }

    const editWorkout = () => {
        navigate(`/edit/${workout._id}`);
    }
   
    return (
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
                            <Col sm={4}><Button variant="outline-primary" onClick={viewWorkout}>View</Button></Col>
                            <Col sm={4}><Button variant="outline-primary" onClick={editWorkout}>Edit</Button></Col>
                            <Col sm={4}><Button variant="outline-danger" onClick={processDelete}>Delete</Button></Col>
                        </Row>                           
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}