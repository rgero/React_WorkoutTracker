import React from 'react';
import {connect} from 'react-redux';
import TimeField from 'react-simple-timefield';

import {addExercise} from '../actions/exercise';

export class CreateCardio extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);

        this.state= {
            name: props.exercise ? props.exercise.name : '',
            type: props.exercise ? props.exercise.type : 'cardio',
            distance: props.exercise ? props.exercise.distance : '0',
            time: props.exercise ? props.exercise.distance : '00:10:30',
            workoutID: props.workoutID ? props.workoutID : '',
            error: ''
        };
    }

    onSubmit(e){
        e.preventDefault();
        var error = '';
        if(!this.state.name){
            error = "Please provide a name"
            this.setState(()=>({error}))
        } else {
            this.setState(()=>({error}))
            const newExercise = {
                name: this.state.name,
                type: "cardio",
                distance: this.state.distance,
                time: this.state.time
            }
            this.props.onSubmit(newExercise);
            this.props.history.push(`/create/${newExercise.workoutID}/`)
        }
    }

    onTextChange = (value) => (evt) => {
        const name = evt.target.value;
        this.setState({
            name
        })
    }

    onTimeChange = (value) => {
        this.setState({
            time: value
        })
    }

    handleValueChange = (key) => (evt) => {
        const amount = evt.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            if (key === "distance"){
                this.setState({
                    distance: amount
                })
            } else if (key === "time"){
                this.setState({
                    time: amount
                })
            }
        } else {

        }
    }


    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Create Cardio</h1>
                    </div>
                </div>
                <div className="content-container">
                    <form className="form">
                            {this.state.error !== '' && <p className="form__error">{this.state.error}</p>}
                            <span className="label">Name</span>
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Name"
                                autoFocus
                                value={this.state.name}
                                onChange={this.onTextChange("name")}
                            />
                            <span className="label">Time</span>
                            <div>
                                <TimeField
                                    className="text-input time-input"
                                    value={this.state.time}
                                    onChange={this.onTimeChange}
                                    colon=":"
                                    showSeconds={true}
                                    
                                />
                                <span className="helpText">(Hour : Minute : Seconds)</span>
                            </div>
                            <span className="label">Distance</span>
                            <input
                                type="text"
                                placeholder="0"
                                value={this.state.distance}
                                onChange={this.handleValueChange('distance')}
                            />
                    </form>
                    <div>
                        <button className="button" onClick={this.onSubmit}>Save Exercise</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (exercise) => dispatch(addExercise(exercise))
    }
}

const mapStateToProps = (state, props) => {
    return {
        workoutID: props.match.params.workoutID ? props.match.params.workoutID : uuid()
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardio); // Check out the react-redux documentation to understand the connect statement here.