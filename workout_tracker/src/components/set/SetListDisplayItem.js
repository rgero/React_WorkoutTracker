import React, {useState} from 'react';

import '../../styles/components/set/SetList.css';

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