import React from 'react';
import { connect } from 'react-redux';
import { newProject } from '../redux/actions/action';

const NewProject = ({ newProject }) => {
    return (
        <button
            type="button"
            className='newProject'
            onClick={newProject}>
            NEW PROJECT
        </button>
    );
};

const mapDispatchToProps = dispatch => ({
    newProject: () => dispatch(newProject())
});
  
const NewProjectContainer = connect(
    null,
    mapDispatchToProps
)(NewProject);

export default NewProjectContainer;