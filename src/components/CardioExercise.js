import React from 'react';

class CardioExercise extends React.Component {
    render() {
        return (
            <div>
                <label className="label">
                    <span>Time</span>
                    <input
                        type="text"
                        placeholder="Primary Muscle Group"
                        autoFocus
                        // value={this.state.muscleGroup}
                        // onChange={this.onMuscleChange}
                    />
                </label>
                <label className="label">
                    <span>Distance</span>
                    <input
                        type="text"
                        placeholder="Primary Muscle Group"
                        autoFocus
                        // value={this.state.muscleGroup}
                        // onChange={this.onMuscleChange}
                    />
                </label>
            </div>
        )
    }
}

export default CardioExercise;