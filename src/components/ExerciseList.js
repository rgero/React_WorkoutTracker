import React from 'react';
import ExerciseListItem from './ExerciseListItem'

export class ExerciseListPage extends React.Component {

    constructor(props){
        super(props)
        console.log(props.currentExercises)
    }

    render() {
        return (
            <div className="list-body">
                {
                    this.props.currentExercises.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Exercises</span>
                        </div>
                    ) : (
                        this.props.currentExercises.map((exercise, index) => (
                        <ExerciseListItem/>))
                    )
                }
            </div>
        )
    }
};

export default ExerciseListPage;
