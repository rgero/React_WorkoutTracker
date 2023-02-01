import React, {useState} from 'react';

import '../../styles/components/inputs.css'

export const SetForm = ({set = {}, onSubmit})=> 
{
    const [reps, setReps] = useState(set.reps ? set.reps : "")
    const [weight, setWeight] = useState(set.weight ? set.weight : "");
    const [error, setError] = useState("")

    const processChange = (event, callback) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            callback(amount);
        }
    }

    const processNewSet = (e) => {
        e.preventDefault();
        
        if (reps === "" || weight === "")
        {
            setError("Reps and Weight need to be populated");
            return;
        }

        let newSet = { reps, weight}
        setReps("");
        setWeight("");
        setError("");
        onSubmit(newSet);
    }

    return (
        <form className="form" onSubmit={processNewSet}>
            {error !== '' && <p className="form__error">{error}</p>}

            {/* Reps */}
            <div className="input-entry">
                <label>Reps</label>
                <input
                    type="text-input"
                    className="text-input"
                    placeholder="Reps"
                    autoFocus
                    value={reps}
                    onChange={e => processChange(e, setReps)}
                />
            </div>

            <div className="input-entry">
                <label>Weight</label>
                <input
                    type="text-input"
                    className="text-input"
                    placeholder="Weight"
                    value={weight}
                    onChange={e => processChange(e, setWeight)}
                />
            </div>

            <div>
                <button className="button">Save Set</button>
            </div>

        </form>
    )
}