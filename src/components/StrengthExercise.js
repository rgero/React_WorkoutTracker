import React from 'react';
import {connect} from 'react-redux';

class StrengthExercise extends React.Component {

    constructor(props){
        super(props)
        this.onMuscleGroupChange = this.onMuscleGroupChange.bind(this);
    }

    onMuscleGroupChange(e){
        const muscleGroup =  e.target.value;
        this.stateSetter({muscleGroup});
    }

    render() {
        return (
            <div>
                <label className="label">
                    <span>Muscle Group</span>
                    <input
                        type="text"
                        placeholder="Primary Muscle Group"
                        autoFocus
                        value={this.props.muscleGroup}
                        onChange={this.props.onMuscleChange}
                    />
                </label>
                {/* <label className="label">
                    <span>Reps</span>
                    <input
                        type="text"
                        value={this.props.reps}
                        onChange={this.props.onRepChange}
                    />
                </label>
                <label className="label">
                    <span>Weight</span>
                    <input
                        type="text"
                        value={this.props.weight}
                        onChange={this.props.onWeightChange}
                    />
                </label> */}
            </div>
        )
    }
}


export default StrengthExercise