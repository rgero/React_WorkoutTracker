import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

import DateFormatter from '../../helpers/DateFormatter';
import {Context as WorkoutContext} from '../../context/WorkoutContext';
import { ExerciseList } from '../../components/exercise/ExerciseList';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ViewWorkoutDetailsPage = ()=> 
{
    const navigate = useNavigate();
    const { id } = useParams();

    const {state, fetchWorkouts, deleteWorkout} = React.useContext(WorkoutContext);
    const [currentWorkout, setCurrentWorkout] = React.useState({});
    const [isLoaded, setLoaded] = React.useState(false);
    const [error, setError] = React.useState("");


    const processDelete = async () => {
        confirmAlert({
            title: 'Confirm to delete?',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                    await deleteWorkout(currentWorkout._id);
                    navigate('/dashboard')
                }
              },
              {
                label: 'No'
              }
            ]
          });

    }

    const isValidWorkout = () => {
        return !Object.keys(currentWorkout).length == 0;
    }

    React.useEffect(()=> {
        const GetWorkoutByID = async (id) => {
            if (!isLoaded)
            {
                await fetchWorkouts();
                setLoaded(true);
            }
            let loadedWorkout = state.filter( (targetWorkout) => {
                return id === targetWorkout._id;
            });

            if (loadedWorkout.length == 0)
            {
                setError("An error has occurred");
            } else {
                setError("");
                setCurrentWorkout(loadedWorkout[0]);
            }
        }
        GetWorkoutByID(id);
    }, [fetchWorkouts, id, isLoaded, state]);

    if (isLoaded) {
        if (isValidWorkout()) { 
            return (
                <Container className="pt-4" fluid="md">
                    <Row className="align-items-center">
                        <Col>
                            <h1>Workout on {DateFormatter(currentWorkout.workoutDate)}</h1> 
                        </Col>
                        <Col>
                            <Dropdown className="float-end">
                                <Dropdown.Toggle id="dropdown-basic">
                                    Options
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href={`/edit/${currentWorkout._id}`}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={processDelete}>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        {currentWorkout.notes !== "" ? (
                            <Card>
                                <Card.Body>
                                    <Card.Title>Notes</Card.Title>
                                    <Card.Body>
                                        {currentWorkout.notes}
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        ) : ( null ) }
                        <Card>
                            <Card.Body>
                                <Card.Title>Exercises - {currentWorkout.exerciseList.length}</Card.Title>
                                <Card.Body>
                                    <ExerciseList exerciseList={currentWorkout.exerciseList}/>
                                </Card.Body>
                                <Card.Body>
                                    
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <Col className="pt-2"><Button className="float-end" href="/dashboard">Return to Dashboard</Button></Col>
                    </Row>
                </Container>
            )
        } else if (error)
        {
            return(
                <Container>
                    <Alert key="danger" variant="danger">
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>{error}</p>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => navigate('/dashboard')} variant="outline-danger">
                                Return to Dashboard
                            </Button>
                        </div>
                    </Alert>
                    
                </Container>
            )
        }
    } else {
        return (
            <Container>
                Loading
            </Container>
        )
    }
}

export default ViewWorkoutDetailsPage;