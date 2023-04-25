import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const SetList = ({setList = [], onDelete=null})=> 
{
  const processDelete = (index) => {
    if (!onDelete)
    {
      return;
    }
    onDelete(index);
  }

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
              <ListGroup.Item>
                <Row>
                  <Col>
                    Reps
                  </Col>
                  <Col>
                    Weight
                  </Col>
                </Row>
              </ListGroup.Item>
              {
                setList.map((set, index) => (
                  <ListGroup.Item key={`${set.reps}_${set.weight}_${index}`} onClick={(e) => processDelete(index)}>
                    <Row>
                      <Col>
                        {set.reps}
                      </Col>
                      { set.weight ? (
                        <Col>
                          {set.weight}
                        </Col>
                      ) : ( null ) }
                    </Row>
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