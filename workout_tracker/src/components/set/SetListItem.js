import React, {useState} from 'react';

import '../../styles/components/set/SetList.css';

export const SetListItem = ({set, onDelete})=> 
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
        onDelete(set.id);
    }

    return (
        <div className="setListItem" style={color} onMouseEnter={onMouseOver.bind(this)} onMouseLeave={onMouseOut.bind(this)} onClick={itemClicked}>
            <div>
                {set.reps}
            </div>
            <div>
                {set.weight}
            </div>
        </div>
    )
}