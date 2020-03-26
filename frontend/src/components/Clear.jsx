import React from 'react';
import { connect } from 'react-redux';
import { clear } from '../redux/actions/action';

const Clear = ({ clear }) => {
    return (
        <button
            type="button"
            onClick={clear}>
            CLEAR
        </button>
    );
};

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(clear())
});
  
const ClearContainer = connect(
    null,
    mapDispatchToProps
)(Clear);

export default ClearContainer;