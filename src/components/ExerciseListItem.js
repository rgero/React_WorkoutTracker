import React from 'react';
import {Link} from 'react-router-dom';


// Export a functional component
// description, amount, and createdAt

const removeExpenseClick = () => {
    props.dispatch(removeExpense(props.id))
}

export const ExerciseListItem = (props) => (
        <Link className="list-item" to={`/`}>
            <div>
                <h3 className="list-item__title">{props.description}</h3>
                <span className="list-item__sub-title">Blah</span>
            </div>
            <h3 className="list-item__amount">Blah</h3>
        </Link>       
)

export default ExerciseListItem;