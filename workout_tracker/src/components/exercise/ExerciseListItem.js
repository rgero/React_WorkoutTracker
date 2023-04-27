import React from 'react';

import { SetList } from '../set/SetList';
import {AlertBox} from '../../helpers/DialogBox';

import Container from 'react-bootstrap/Container';

export const ExerciseListItem = ({exercise, onDelete})=> 
{
  let exerciseName = exercise.name;
  let setList = exercise.setList;

  const processDelete = () => {
    let title = 'Are you sure you want to delete this?';
    let subtitle = `The exercise named ${exerciseName}`;
    let buttons = [
      {
        label: 'Yes',
        onClick: async () => {
          await onDelete(exercise);
        }
      },
      {
        label: 'No'
      }
    ]
    AlertBox(title, subtitle, buttons);
  }

  return (
    <>
      {
        exerciseName === "" ? (
          <Container className="list-item list-item--message">
            <span>No Name</span>
          </Container>
        ) : (
            <Container>
                <Container onClick={processDelete}>
                    {exerciseName}
                    <SetList setList={setList} key={`${exerciseName}_Sets`}/>
                </Container>
            </Container>
        )
      }
    </>
  )
}