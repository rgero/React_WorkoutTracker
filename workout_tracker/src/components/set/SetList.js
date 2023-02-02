import React from 'react';
import { SetListItem } from './SetListItem';
import { SetListHeader } from './SetListHeader';

import '../../styles/components/set/SetList.css';

export const SetList = ({setList = [], onDelete})=> 
{
    return (
        <div className="setList">
        {
            setList.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Sets</span>
                </div>
            ) : (
                <div>
                    <SetListHeader/>
                    {
                        setList.map((set) => (
                        <SetListItem
                            key={set.id}
                            id={set.id}
                            reps={set.reps}
                            weight={set.weight}
                            onDelete={onDelete}
                        />))
                    }
                </div>
            )
        }
    </div>
    )
}