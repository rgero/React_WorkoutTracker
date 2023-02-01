import React from 'react';

import '../../styles/components/set/SetList.css';

export const SetListItem = ({reps, weight})=> 
{
    return (
        <div className="setListItem">
            <div>
                {reps}
            </div>
            <div>
                {weight}
            </div>
        </div>
    )
}