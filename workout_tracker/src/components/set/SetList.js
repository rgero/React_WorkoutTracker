import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export const SetList = ({setList = [], onDelete=null})=> 
{
  const processDelete = (index) => {
    if (!onDelete)
    {
      return;
    }
    onDelete(index);
  }

  if (setList.length === 0)
  {
    return (null);
  }

  return (
    <Container className="pt-3" style={{width:"60%", margin:"auto", textAlign:"center" }} >
      <div style={{textAlign:"left"}}>Set List</div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Reps</th>
            { setList[0].weight ? (
                  <th>Weight</th>
                ) : (null) 
          }
          </tr>
        </thead>
        <tbody>
            { setList.map((set, index) => (
              <tr onClick={(e) => processDelete(index)} key={index}>
                <td>
                  {set.reps}
                </td>
                { set.weight ? (
                  <td>
                    {set.weight}
                  </td>
                ) : (null) }
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  )
}