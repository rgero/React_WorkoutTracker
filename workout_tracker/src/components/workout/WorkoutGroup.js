import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { WorkoutListItem } from "./WorkoutListItem";
import { GetMonthName, GetOrderedValues } from '../../helpers/WorkoutListProcesser';

const WorkoutGroup = (workoutList, order=true) => {

    let months = GetOrderedValues(workoutList, order);
    return (
        <div>
            {
                months.map((month, index)=> (
                    <Accordion defaultActiveKey="0">   
                        <Accordion.Item>
                            <Accordion.Header>{GetMonthName(month)}</Accordion.Header>
                            <Accordion.Body>
                                {
                                    workoutList[month].map((workout, index) => (
                                            <WorkoutListItem workout={workout}/>
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