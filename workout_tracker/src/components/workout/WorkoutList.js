import React from "react";
import Container from "react-bootstrap/Container";

import Accordion from 'react-bootstrap/Accordion';
import {GetOrderedValues, ProcessWorkoutList} from "../../helpers/WorkoutListProcesser";
import WorkoutGroup from "./WorkoutGroup";

export const WorkoutList = ({workoutList=[], descendingOrder}) => 
{

    let organizedList = ProcessWorkoutList(workoutList);
    let yearOrder = GetOrderedValues(organizedList, descendingOrder);
    return (
        <Container>
            { 
                Object.keys(organizedList).length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Workouts</span>
                    </div>
                ) : (
                    <div>
                        
                        {
                            yearOrder.map((year, index)=> (
                                <Accordion defaultActiveKey={index}>
                                    <Accordion.Item>
                                        <Accordion.Header>{year}</Accordion.Header>
                                        <Accordion.Body>
                                            <WorkoutGroup {...organizedList[year]} />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            ))
                        }
                    </div>
                )
            }
        </Container>
    )
}