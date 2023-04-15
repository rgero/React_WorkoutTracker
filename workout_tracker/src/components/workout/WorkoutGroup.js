import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { WorkoutListItem } from "./WorkoutListItem";
import { GetMonthName, GetOrderedValues } from '../../helpers/WorkoutListProcesser';

const WorkoutGroup = ({workoutList, descendingOrder}) => {
    let months = GetOrderedValues(workoutList, descendingOrder);
    return (
        <div>
            {
                months.map((month, index)=> (
                    <Accordion defaultActiveKey={index} key={`WorkoutGroup_${index}`}>   
                        <Accordion.Item>
                            <Accordion.Header>{GetMonthName(month)}</Accordion.Header>
                            <Accordion.Body>
                                {
                                    workoutList[month].map((workout, index) => (
                                            <WorkoutListItem workout={workout} key={`WorkoutListItem_${index}`} />
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