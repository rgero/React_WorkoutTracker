import React from 'react';
import {Link} from 'react-router-dom';

// Export a functional component
// description, amount, and createdAt

export const SetListItem = (props) => (
        <Link className="list-item" to={`/edit/${props.id}`}>
            <h3>{props.reps}</h3>
            <h3>{props.weight}</h3>
        </Link>       
)

export default SetListItem;