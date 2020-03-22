import React from 'react';
import Modal from 'react-awesome-modal';
import Dropzone from 'react-dropzone'

class Popup extends React.Component {
    fileProcess = event => {
        this.setState({
            file: event.target.files[0]
        });
    }

    fileUpload = () => {
        const data = new FormData();
        data.append('file', this.state.file);
        fetch('http://localhost:5000/api/pixelize', {
            headers: {
                'Access-Control-Allow-Origin': true,
            },
            method: 'POST',
            body: data,
        }).then(res => {
            console.log(res);
        })
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
                    <a className='popup-close' onClick={() => this.props.close()}>x</a>
                    <div className='popup-header'>Upload</div>
                    <input type="file" onChange={this.fileProcess}></input>
                    <button onClick={this.fileUpload}>upload</button>
                </div>
            </Modal>
        );
    }
}

export default Popup;
