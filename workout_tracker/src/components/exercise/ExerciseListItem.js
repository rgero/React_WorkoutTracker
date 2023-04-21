import React, {useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import { SetListHeader } from '../set/SetListHeader';

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
                        {
                            setList.length > 0 ? (
                                <ListGroup>
                                    <ListGroup.Item><SetListHeader/></ListGroup.Item>
                                    {
                                        setList.map((set, index) => (
                                            <ListGroup.Item>
                                                <div className="setListItem">
                                                    <div>
                                                        {set.reps}
                                                    </div>
                                                    <div>
                                                        {set.weight}
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            ) : ( null )
                        }
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