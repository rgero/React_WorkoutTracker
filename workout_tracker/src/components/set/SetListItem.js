import React, {useState} from 'react';

import '../../styles/components/set/SetList.css';

export const SetListItem = ({id, reps, weight, onDelete})=> 
{
    const [color, setColor] = useState({background: "#ffffff"});

    const highlightColor = {background: "#03a9fc"}
    const unhighlightColor = {background: "#ffffff"}

    const onMouseOver = (e) => {
        setColor(highlightColor);
    }
    
    const onMouseOut = (e) => {
        setColor(unhighlightColor);
    }

    const itemClicked = (e) => {
        onDelete(id);
    }

    return (
        <div className="setListItem" style={color} onMouseEnter={onMouseOver.bind(this)} onMouseLeave={onMouseOut.bind(this)} onClick={itemClicked}>
            <div>
                {reps}
            </div>
            <div>
                {weight}
            </div>
        </div>
    )
}