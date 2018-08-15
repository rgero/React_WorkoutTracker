import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseList from './ExerciseList';
import uuid from 'uuid';

import {getValidExercises} from '../selectors/exercises';

export class CreateWorkout extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Create Workout</h1>
                        <button className="button" onClick={this.onSubmit}>Save Workout</button>
                    </div>
                </div>
                <div className="content-container">
                    <div>
                        <ExerciseList currentExercises={this.props.exercises}/>
                    </div>
                    <div className="addExercise">
                        <Link className="button" to={"/create/" + this.props.workoutID + "/cardio"}>Add Cardio</Link>
                        <Link className="button" to={"/create/" + this.props.workoutID + "/strength"}>Add Strength</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mapStateToProps = (state, props) => {
    const workoutID = props.match.params.workoutID ? props.match.params.workoutID : uuid();
    return {
        workoutID: workoutID,
        exercises: getValidExercises(state.exercise, workoutID)
    };
}

export default connect(mapStateToProps, undefined)(CreateWorkout); // Check out the react-redux documentation to understand the connect statement here.