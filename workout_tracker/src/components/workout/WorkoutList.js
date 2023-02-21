import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import { WorkoutListItem } from "./WorkoutListItem";

export const WorkoutList = ({workoutList=[]}) => {
    return (
        <Container>
            { 
                workoutList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Workouts</span>
                    </div>
                ) : (
                    <div>
                        <ListGroup className="list-group-flush">
                            {
                                workoutList.map((workout, index) => (
                                    <ListGroup.Item action>
                                        <WorkoutListItem workout={workout}/>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>

                    </div>
                )
            }
        </Container>
    )
}