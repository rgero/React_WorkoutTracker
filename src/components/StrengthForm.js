import React from 'react';

export class StrengthForm extends React.Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleAddSet = this.handleAddSet.bind(this);
        this.handleRemoveSet = this.handleRemoveSet.bind(this);
        this.handleSetChange = this.handleSetChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        this.state= {
            name: props.exercise ? props.exercise.name : '',
            type: props.exercise ? props.exercise.type : 'strength',
            muscleGroup: props.exercise ? props.exercise.muscleGroup : '',
            sets: props.exercise ? props.exercise.sets : [],
            workoutID: props.workoutID ? props.workoutID : '',
            error: ''
        };
    }

    onTextChange = (value) => (evt) => {
        if (value === "name"){
            const name = evt.target.value;
            this.setState({
                name
            })
        } else if (value === "muscleGroup"){
            const muscleGroup = evt.target.value;
            this.setState({
                muscleGroup
            })
        }
    }

    handleSetChange = (idx, key) => (evt) => {
        const amount = evt.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            const sets = this.state.sets;
            const currentSet = sets[idx];
            if (key === "reps"){
                currentSet.reps = evt.target.value;
            } else if (key === "weight"){
                currentSet.weight = evt.target.value;
            }
            sets[idx] = currentSet;
            this.setState({
                sets
            })
        } else {

        }
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
            const newExercise = {
                name: this.state.name,
                type: "strength",
                muscleGroup: this.state.muscleGroup,
                sets: this.state.sets,
                workoutID: this.state.workoutID
            }
            this.props.onSubmit(newExercise);
        }
    }

    render() {
        return (
            <div>
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
                    <span className="label">Muscle Group</span>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Muscle Group"
                        autoFocus
                        value={this.state.muscleGroup}
                        onChange={this.onTextChange("muscleGroup")}
                    />
                    <span className="label">Sets</span>
                    {this.state.sets.map((set, idx) => (
                        <div>
                        <input
                            type="text"
                            placeholder="Reps"
                            value={set.reps}
                            onChange={this.handleSetChange(idx, 'reps')}
                        />
                        <input
                            type="text"
                            placeholder="Weight"
                            value={set.weight}
                            onChange={this.handleSetChange(idx,'weight')}
                            />
                        <button type="button" onClick={this.handleRemoveSet(idx)} className="small">-</button>
                        </div>
                    ))}
                    <button type="button" onClick={this.handleAddSet} className="small">Add Set</button>
                </form>
                <div>
                    <button className="button" onClick={this.onSubmit}>Save Exercise</button>
                </div>
            </div>
        )
    }
};

export default StrengthForm;
