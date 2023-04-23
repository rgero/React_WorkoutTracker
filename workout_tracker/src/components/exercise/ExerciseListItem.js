import React, {useState} from 'react';

import { SetList } from '../set/SetList';

import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ExerciseListItem = ({exercise = {}})=> 
{
    const [optionsShown, showOptions] = useState(false);

    let exerciseName = exercise.name;
    let setList = exercise.setList;
    return (
        <>
            {
                exerciseName === "" ? (
                    <Container className="list-item list-item--message">
                        <span>No Name</span>
                    </Container>
                ) : (
                    <Container onClick={(e)=> { showOptions(!optionsShown) }}>
                        {exerciseName}
                        <SetList setList={setList}/>
                        <Collapse in={optionsShown}>
                            <Row>
                                <Col>
                                    <Button className="mt-4" variant="outline-secondary">
                                        Edit
                                    </Button>
                                </Col>
                                <Col>
                                    <Button className="mt-4" variant="danger">
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        </Collapse>
                    </Container>
                )
            }
        </>
    )
}