import React from 'react';
import {connect} from 'react-redux';

export class CreateExercisePage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onMuscleChange = this.onMuscleChange.bind(this);
        this.onRepChange = this.onRepChange.bind(this);
        this.onWeightChange = this.onWeightChange.bind(this);
        this.state= {
            name: props.exercise ? props.exercise.name : '',
            type: props.exercise ? props.exercise.type : 'strength',
            muscleGroup: props.exercise ? props.exercise.muscleGroup : '',
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

    setItemState(obj){
        console.log(obj);
        this.setState(()=> ({
            ...obj
        }))
    }

    
    onMuscleChange(e) {
        const name = e.target.value;
        this.setState(()=> ({
            muscleGroup: name
        }))
    }

    onRepChange(e){
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=> ({
                reps: amount
            }))
        }
    }

    onWeightChange(e){
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=> ({
                weight: amount
            }))
        }
    }


    onSubmit(){
        this.props.history.push('/')
    }

    render(){
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
                        { this.state.type == "cardio" ? 
                            <div>
                                <label className="label">
                                    <span>Time</span>
                                    <input
                                        type="text"
                                        placeholder="Primary Muscle Group"
                                        autoFocus
                                        value={this.state.muscleGroup}
                                        onChange={this.onMuscleChange}
                                    />
                                </label>
                                <label className="label">
                                    <span>Distance</span>
                                    <input
                                        type="text"
                                        placeholder="Primary Muscle Group"
                                        autoFocus
                                        value={this.state.muscleGroup}
                                        onChange={this.onMuscleChange}
                                    />
                                </label>
                            </div>
                        :
                            <div>
                                <label className="label">
                                    <span>Muscle Group</span>
                                    <input
                                        type="text"
                                        placeholder="Primary Muscle Group"
                                        autoFocus
                                        value={this.state.muscleGroup}
                                        onChange={this.onMuscleChange}
                                    />
                                </label>
                                <label className="label">
                                    <span>Reps</span>
                                    <input
                                        type="text"
                                        value={this.state.reps}
                                        onChange={this.onRepChange}
                                    />
                                </label>
                                <label className="label">
                                    <span>Weight</span>
                                    <input
                                        type="text"
                                        value={this.state.weight}
                                        onChange={this.onWeightChange}
                                    />
                                </label>
                            </div>
                        }
                    </form>
                </div>
            </div>
        )
    }
}



class CardioExercise extends React.Component {

    render() {
        return (
            <div>CARDIO</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(undefined, mapDispatchToProps)(CreateExercisePage); // Check out the react-redux documentation to understand the connect statement here.