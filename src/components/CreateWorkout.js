import React from 'react';
import {connect} from 'react-redux';
import ExerciseList from './ExerciseList';
import uuid from 'uuid';


import StrengthForm from './StrengthForm';
import {getValidExercises} from '../selectors/exercises';

export class CreateWorkout extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            lastExercise: undefined,
            workoutID: props.workoutID,
            exerciseList: props.exerciseList ? props.exerciseList : [],
        }

        this.addExercise = this.addExercise.bind(this);
    }

    onSubmit(){
        this.props.history.push('/')
    }

    setExercise(exercise){
        this.setState({
            lastExercise: exercise
        })
    }

    addExercise(exercise){
        var exerciseList = this.state.exerciseList;
        exerciseList.push(exercise)
        this.setState({
            exerciseList,
            lastExercise: undefined
        })
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
                        <ExerciseList currentExercises={this.state.exerciseList}/>
                    </div>
                    <div className="addExercise">
                        <button className="button" onClick={()=> this.setExercise("strength")}>Add Strength</button>
                        <button className="button" onClick={()=> this.setExercise("cardio")}>Add Cardio</button>
                    </div>
                    { !this.state.lastExercise ? 
                        <div/>
                        :
                        this.state.lastExercise=="strength" ?
                            <StrengthForm onSubmit={this.addExercise}/>
                            :
                            <h1>Cardio</h1>
                    }
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