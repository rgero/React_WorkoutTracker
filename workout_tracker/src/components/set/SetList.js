import React from 'react';
import { SetListHeader } from './SetListHeader';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

export const SetList = ({setList = [], onDelete})=> 
{
    return (
        <Container>
            {
                setList.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Sets</span>
                    </div>
                ) : (
                    <Container>
                        <ListGroup>
                            <ListGroup.Item><SetListHeader/></ListGroup.Item>
                            {
                                setList.map((set, index) => (
                                    <ListGroup.Item action onClick={(e) => onDelete(index)}>
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

                    </Container>
                )
            }
        </Container>
    )
}