import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { WorkoutListItem } from "./WorkoutListItem";
import { GetMonthName, GetOrderedValues, SortMonth } from '../../helpers/WorkoutListProcesser';

const WorkoutGroup = ({workoutList, descendingOrder}) => {
    let months = GetOrderedValues(workoutList, descendingOrder);
    return (
        <div>
            {
                months.map((month, index)=> {
                    let sortedMonth = SortMonth(workoutList[month], descendingOrder);
                    return (
                        <Accordion defaultActiveKey={index} key={`WorkoutGroup_${index}`}>   
                            <Accordion.Item>
                                <Accordion.Header>{GetMonthName(month)}</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        sortedMonth.map((workout, workoutIndex) => (
                                            <WorkoutListItem workout={workout} key={`WorkoutListItem_${workoutIndex}`} />
                                        ))
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })
            }
        </div>
      );
}

export default WorkoutGroup;