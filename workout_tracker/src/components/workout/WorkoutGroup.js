import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { WorkoutListItem } from "./WorkoutListItem";
import { GetMonthName, GetOrderedValues } from '../../helpers/WorkoutListProcesser';

const WorkoutGroup = (workoutList, descendingOrder=true) => {

    let months = GetOrderedValues(workoutList, descendingOrder);
    return (
        <div>
            {
                months.map((month, index)=> (
                    <Accordion defaultActiveKey={index} alway>   
                        <Accordion.Item>
                            <Accordion.Header>{GetMonthName(month)}</Accordion.Header>
                            <Accordion.Body>
                                {
                                    workoutList[month].map((workout, index) => (
                                            <WorkoutListItem workout={workout} index={index} />
                                        ))
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
            }
        </div>
      );
}

export default WorkoutGroup;