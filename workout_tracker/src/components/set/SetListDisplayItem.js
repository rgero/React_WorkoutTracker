import React from 'react';

export const SetListDisplayItem = ({set})=> 
{
    return (
        <div className="setListItem">
            <div>
                {set.reps}
            </div>
            <div>
                {set.weight}
            </div>
        </div>
    )
}