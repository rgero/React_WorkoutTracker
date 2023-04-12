import React, {useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import DateFormatter from '../../helpers/DateFormatter';

import {Context as WorkoutContext} from '../../context/WorkoutContext';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const WorkoutListItem = ({workout, index}) => {

    const {deleteWorkout} = useContext(WorkoutContext);

    const navigate = useNavigate();
    let {workoutDate, notes, exerciseList} = workout;

    const viewWorkout = () => {
        navigate(`/view/${workout._id}`);
    }
    
    const processDelete = () => {
        confirmAlert({
            title: 'Are you sure you want to delete this?',
            message: `Workout on ${DateFormatter(workout.workoutDate)} with ${workout.exerciseList.length} exercises`,
            buttons: [
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
          });
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