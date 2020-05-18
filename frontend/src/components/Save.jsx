import React from 'react';
import { connect } from 'react-redux';
import { save } from '../redux/actions/action';

const Save = ({ save }) => {
    return (
        <button
            type="button"
            onClick={save}>
            SAVE
        </button>
    );
};

const mapDispatchToProps = dispatch => ({
    save: () => dispatch(save())
});
  
const SaveContainer = connect(
    null,
    mapDispatchToProps
)(Save);

export default SaveContainer;