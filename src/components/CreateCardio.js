import React from 'react';
import {connect} from 'react-redux';

export class CreateCardio extends React.Component {
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
                        <h1 className="page-header__title">Create Cardio</h1>
                    </div>
                </div>
                <div className="content-container">
                    <h1>CARDIO</h1>


                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(undefined, undefined)(CreateCardio); // Check out the react-redux documentation to understand the connect statement here.