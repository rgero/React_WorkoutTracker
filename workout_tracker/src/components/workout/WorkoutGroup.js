import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { WorkoutListItem } from "./WorkoutListItem";
import { GetMonthName, GetOrderedValues, SortMonth } from '../../helpers/WorkoutListProcesser';

const WorkoutGroup = ({workoutList, descendingOrder}) => {
    let months = GetOrderedValues(workoutList, descendingOrder);
    return (
        <>
            {
                months.map((month, index)=> {
                    let sortedMonth = SortMonth(workoutList[month], descendingOrder);
                    let year = new Date(workoutList[month][0].workoutDate).getFullYear();
                    return (
                        <Accordion defaultActiveKey={index} key={`WorkoutGroup_${year}_${month}_${index}`}>   
                            <Accordion.Item>
                                <Accordion.Header>{GetMonthName(month)}</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        sortedMonth.map((workout, workoutIndex) => (
                                            <WorkoutListItem workout={workout} key={`WorkoutItem_${workout._id}`}/>
                                        ))
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })
            }
        </>
      );
}

export default WorkoutGroup;