import React from 'react';
import Collapsible from 'react-collapsible';
import ListGroup from 'react-bootstrap/ListGroup';
import { WorkoutListItem } from "./WorkoutListItem";
import { GetMonthName, GetOrderedValues } from '../../helpers/WorkoutListProcesser';

import "../../styles/components/Collapsible.css"

const WorkoutGroup = (workoutList, order=true) => {

    let months = GetOrderedValues(workoutList, order);

    return (
        <div>         
            {
                months.map((month, index)=> (
                    <Collapsible classParentString="collapseMonth" trigger={GetMonthName(month)}>
                        {
                            <ListGroup className="list-group-flush">
                            {
                                workoutList[month].map((workout, index) => (
                                        <ListGroup.Item action key={index}>
                                            <WorkoutListItem workout={workout}/>
                                        </ListGroup.Item>
                                    ))
                            }
                            </ListGroup>
                        }
                    </Collapsible>
                ))
            }
        </div>
      );
}

export default WorkoutGroup;