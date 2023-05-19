import React from 'react';

import { SetList } from '../set/SetList';
import {AlertBox} from '../../helpers/DialogBox';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const ExerciseListItem = ({index, exercise = {}})=> 
{

  return (
    <>
      {
        Object.keys(exercise).length === 0 ? (
          <Container className="list-item list-item--message">
            <span>No Name</span>
          </Container>
        ) : (
          <Card>
            <Card.Body>
              <Card.Title>#{index} - {exercise.name}</Card.Title>
              <Card.Body>
                <SetList  setList={exercise.setList} key={`${exercise.name}_Sets`}/>
              </Card.Body>
            </Card.Body>
          </Card>
        )
      }
    </>
  )
}