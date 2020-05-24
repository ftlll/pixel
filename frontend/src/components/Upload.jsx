import React from 'react';
import { connect } from 'react-redux';
// import Dropzone from 'react-dropzone'
import { importPixelate } from '../redux/actions/action';

class Upload extends React.Component {
    state = {};

    fileUpload = () => {
        this.props.fileUpload(this.state)
    }

    fileProcess = (file, rejectedFiles) => {
        this.setState({
            file
        });
    }

    render() {
        return (
            <div className='upload'>
                {/* <div>Drop</div>
                <Dropzone onDrop={this.fileProcess} style={style}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                    </div>
                    )}
                </Dropzone> */}
                <input type="file" onChange={this.fileProcess}></input>
                <button className='upload-button' onClick={this.fileUpload}>Upload</button>
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
