import React from 'react';
import {connect} from 'react-redux';

import CardioExercise from './CardioExercise';
import StrengthExercise from './StrengthExercise';

export class CreateExercisePage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);

        this.state= {
            name: props.exercise ? props.exercise.name : 'Reading from State',
            type: props.exercise ? props.exercise.type : 'strength',
            muscleGroup: props.exercise ? props.exercise.muscleGroup : 'Bugger',
            reps: props.exercise ? (props.exercise.reps) : 0,
            weight: props.exercise ? (props.exercise.weight) : 0,
            duration: props.exercise ? (props.exercise.time) : 0,
            distance: props.exercise ? (props.exercise.distance) : 0,
            error: ''
        };
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(()=>({
            name
        }));
    }

    onTypeChange(e){
        const type = e.target.value;
        this.setState(()=>({
            type
        }));
    }




    onSubmit(){
        this.props.history.push('/')
    }

    render(){
        const props = {...this.state}
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Create Exercise</h1>
                    </div>
                </div>
                <div className="content-container">
                    <form className="form" onSubmit={this.onSubmit}>
                        <label className="label">
                            <span>Name</span>
                            <input
                                type="text"
                                placeholder="Exercise Name"
                                autoFocus
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                        </label>
                        <label className="label">
                            <span>Type</span>
                            <select value={this.state.type} onChange={this.onTypeChange}>
                                <option value="strength">Strength</option>
                                <option value="cardio">Cardio</option>
                            </select>
                        </label>
                        { this.state.type == "cardio" ? <CardioExercise/> : <StrengthExercise {...props} onMuscleGroupChange={this.onMuscleGroupChange}/> }
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(undefined, mapDispatchToProps)(CreateExercisePage); // Check out the react-redux documentation to understand the connect statement here.