import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseList from './ExerciseList';
import uuid from 'uuid';

import {getValidExercises} from '../selectors/exercises';

export class CreateWorkoutPage extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.exercises)
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
                    </div>
                </div>
                <div className="content-container">
                    <div>
                        <ExerciseList/>
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

export default connect(mapStateToProps, undefined)(CreateWorkoutPage); // Check out the react-redux documentation to understand the connect statement here.