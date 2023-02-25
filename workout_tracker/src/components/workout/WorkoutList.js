import React from "react";
import Container from "react-bootstrap/Container";

import Collapsible from "react-collapsible";
import {GetOrderedValues, ProcessWorkoutList} from "../../helpers/WorkoutListProcesser";
import WorkoutGroup from "./WorkoutGroup";


export const WorkoutList = ({workoutList=[]}) => 
{

    let organizedList = ProcessWorkoutList(workoutList);
    let yearOrder = GetOrderedValues(organizedList, true);
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
                                <Collapsible trigger={year}>
                                    <WorkoutGroup {...organizedList[year]} />
                                </Collapsible>
                            ))
                        }
                    </div>
                )
            }
        </Container>
    )
}