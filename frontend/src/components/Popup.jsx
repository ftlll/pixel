import React from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import { importPixelate } from '../redux/actions/action';
//import Dropzone from 'react-dropzone'

class Popup extends React.Component {
    state = {};
    fileProcess = event => {
        this.setState({
            file: event.target.files[0]
        });
    }
    fileUpload = () => {
        this.props.fileUpload(this.state)
    }

    render() {
        return (
            <Modal 
                visible={this.props.visible}
                width="80%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => this.props.close()}>
                <div className='modal-content'>
                    <button className='popup-close' onClick={() => this.props.close()}>x</button>
                    <div className='popup-header'>Upload</div>
                    <input type="file" onChange={this.fileProcess}></input>
                    <button onClick={this.fileUpload}>upload</button>
                </div>
            </Modal>
        );
    }
}
  
const mapDispatchToProps = dispatch => ({
    fileUpload: (state) => {
        const data = new FormData();
        console.log('called');
        if(state.file) {
            data.append('file', state.file);
            fetch('http://localhost:5000/api/pixelate', {
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

const PopupContainer = connect(null, mapDispatchToProps)(Popup);

export default PopupContainer;
