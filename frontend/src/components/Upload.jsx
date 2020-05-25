import React from 'react';
import { connect } from 'react-redux';
// import Dropzone from 'react-dropzone'
import { importPixelate } from '../redux/actions/action';
import { NotificationManager } from 'react-notifications';

class Upload extends React.Component {
    state = {
        column: '16',
        row: '16'
    };

    fileUpload = () => {
        this.props.fileUpload(this.state)
    }

    fileProcess = (evt) => {
        console.log(evt.target);
        this.setState({ file: evt.target.file });
        console.log(this.state.file)
    }

    handleChangeCol = (evt) => {
        this.setState({ column: evt.target.value });
    }

    handleChangeRow = (evt) => {
        this.setState({ row: evt.target.value });
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
                <div>Rows: </div> <input style={{width: '150px'}} type="text" pattern="[0-9]*" onChange={this.handleChangeRow} value={this.state.row}/>
                <div>Columns: </div> <input style={{width: '150px'}} type="text" pattern="[0-9]*" onChange={this.handleChangeCol} value={this.state.column}/>
                <button className='upload-button' onClick={this.fileUpload}>Upload</button>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    fileUpload: (state) => {
        const data = new FormData();
        console.log(state);
        if(state.file) {
            NotificationManager.info('Your file is processing...');
            data.append('file', state.file);
            // data.append('row', state.row);
            // data.append('column', state.column);
            fetch('./api/pixelate', {
                // headers: {
                //     'Access-Control-Allow-Origin': true,
                // },
                method: 'POST',
                body: data,
            }).then(res => {
                console.log(res.json());
                return res.json();
            }).then(data => {
                dispatch(importPixelate(data))
                NotificationManager.success('file processed')
            })
        } else {
            NotificationManager.warning("No file attached");
        }
    }
});

const UploadContainer = connect(null, mapDispatchToProps)(Upload);

export default UploadContainer;
