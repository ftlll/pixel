import React from 'react';
import { connect } from 'react-redux';
import { importPixelate } from '../redux/actions/action';

class Upload extends React.Component {
    state = {};

    fileUpload = () => {
        this.props.fileUpload(this.state)
    }

    fileProcess = event => {
        this.setState({
            file: event.target.files[0]
        });
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileProcess}></input>
                <button onClick={this.fileUpload}>Upload</button>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    fileUpload: (state) => {
        const data = new FormData();
        if(state.file) {
            data.append('file', state.file);
            fetch('./api/pixelate', {
                headers: {
                    'Access-Control-Allow-Origin': true,
                },
                method: 'POST',
                body: data,
            }).then(res => {
                return res.json();
            }).then(data => {
                dispatch(importPixelate(data))
            })
        } else {
            alert("no file attached");
        }
    }
});

const UploadContainer = connect(null, mapDispatchToProps)(Upload);

export default UploadContainer;
