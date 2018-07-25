import React from 'react';
import { connect } from 'react-redux';
import SetListItem from './SetListItem'
import {getSets} from '../selectors/sets';

export const SetList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Sets</div>
                <div className="show-for-desktop">Reps</div>
                <div className="show-for-desktop">Weight</div>
            </div>
            <div className="list-body">
                {
                    props.sets.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Sets</span>
                        </div>
                    ) : (
                        props.sets.map((set, index) => (
                        <SetListItem 
                            id={set.id}
                            reps={set.reps}
                            weight={set.weight}
                        />))
                    )
                }
            </div>
            I should really look to see if this is necessary. This might be better as a dynamic table.
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        sets: getSets(state.sets),
    };
}

export default connect(mapStateToProps)(SetList);