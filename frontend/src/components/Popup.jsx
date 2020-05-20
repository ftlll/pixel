import React from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import { importPixelate } from '../redux/actions/action';
import Preview from './Preview';
import Dropzone from 'react-dropzone';

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

    getImportContent = (importType) => {

    }

    getExportContent = (exportType) => {

    }

    getModalContent = (popUpType) => {
        let content;
        switch (popUpType) {
            case 'import':
                content = (
                    <div className='modal-content'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Import</div>
                        <input type="file" onChange={this.fileProcess}></input>
                        <button onClick={this.fileUpload}>Upload</button>
                    </div>);
                break;
            case 'export':
                content = (
                    <div className='modal-content'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Export</div>
                        <Preview
                            key="0"
                            grids={this.props.grids}
                            columns={this.props.columns}
                            rows={this.props.rows}
                            cellSize={5}
                            duration={5}
                            active={0}
                            animate={true}
                        />
                    </div>
                );
                break;
            default:
        }
        return content;
    }

    render() {
        const { visible, popUpType } = this.props;
        return (
            <Modal visible={visible}
                width="80%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => this.props.close()}>
                {this.getModalContent(popUpType)}
            </Modal>
        );
    }
}
  
const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    const active = canvas.get('active');
    return {
      grids: canvas.get('grids'),
      active,
      activeGrid: canvas.getIn(['grids', active]),
      paletteGridData: state.present.getIn(['palette', 'grid']),
      columns: canvas.get('columns'),
      rows: canvas.get('rows'),
      cellSize: state.present.get('size'),
      duration: state.present.get('duration')
    };
  };

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

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);

export default PopupContainer;
