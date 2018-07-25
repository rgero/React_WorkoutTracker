import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export const DashboardHeader = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span>{0}</span> workouts
            </h1>
            <div className="page-header__action">
                <Link className="button" to="/create">Add Workout</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state)=>{
    return {
    };
}

export default connect()(DashboardHeader);