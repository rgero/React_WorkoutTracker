import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseList from './ExerciseList';

export class CreateWorkoutPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.props.location.state.newExercise)
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
                        <Link className="button" to="/create/cardio">Add Cardio</Link>
                        <Link className="button" to="/create/strength">Add Strength</Link>
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

export default connect(undefined, undefined)(CreateWorkoutPage); // Check out the react-redux documentation to understand the connect statement here.