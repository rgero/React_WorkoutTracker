import React from 'react';
import {connect} from 'react-redux';

import SetList from './SetList';

export class CreateStrength extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleAddSet = this.handleAddSet.bind(this);
        this.handleRemoveSet = this.handleRemoveSet.bind(this);
        this.handleSetRepsChange = this.handleSetRepsChange.bind(this);
        this.handleSetWeightChange = this.handleSetWeightChange.bind(this);

        this.state= {
            name: props.exercise ? props.exercise.name : '',
            muscleGroup: props.exercise ? props.exercise.muscleGroup : '',
            sets: props.exercise ? props.exercise.sets : [],
            error: ''
        };
    }

    handleSetRepsChange = (idx) => (evt) => {
        //Stub
    }

    handleSetWeightChange = (idx) => (evt) => {
        //Stub
    }

    handleAddSet = () => {
        this.setState({ sets: this.state.sets.concat([{ reps: '', weight: '' }]) });
    }

    handleRemoveSet = (idx) => () => {
        this.setState({ sets: this.state.sets.filter((s, sidx) => idx !== sidx) });
    }

    onSubmit(e){
        e.preventDefault();
        var error = '';
        if(!this.state.name){
            error = "Please provide a name"
            this.setState(()=>({error}))
        } else {
            this.setState(()=>({error}))
            this.props.onSubmit({

            })
        }
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Create Strength</h1>
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
                            onChange={this.onDescriptionChange}
                        />
                        <span className="label">Muscle Group</span>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Muscle Group"
                            autoFocus
                            value={this.state.name}
                            onChange={this.onDescriptionChange}
                        />
                        <span className="label">Sets</span>
                        {this.state.sets.map((set, idx) => (
                            <div>
                              <input
                                type="text"
                                placeholder="Reps"
                                value={set.reps}
                                onChange={this.handleSetRepsChange(idx)}
                              />
                              <input
                                type="text"
                                placeholder="Weight"
                                value={set.weight}
                                onChange={this.handleSetWeightChange(idx)}
                                />
                              <button type="button" onClick={this.handleRemoveSet(idx)} className="small">-</button>
                            </div>
                          ))}
                          <button type="button" onClick={this.handleAddSet} className="small">Add Set</button>
                    </form>
                    <div>
                        <button className="button">Save Exercise</button>
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

export default connect(undefined, undefined)(CreateStrength); // Check out the react-redux documentation to understand the connect statement here.