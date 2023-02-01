import React from 'react';

import '../../styles/components/set/SetList.css';

export const SetListHeader = ({reps, weight})=> 
{
    return (
        <div className="setListHeader">
            <div>
                Reps
            </div>
            <div>
                Weight
            </div>
        </div>
    )
}