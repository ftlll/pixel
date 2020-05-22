import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-awesome-modal';
import Preview from './Preview';
import Upload from './Upload';
import LocalData from './LocalData';
import * as actions from '../redux/actions/action';

class Popup extends React.Component {
    constructor (props) {
        super(props);
        this.closeModal = () => {
            props.close();
        };
        this.openModal = () => {
            this.props.visible = true
        };
    }
    getImportContent = (importType) => {
        const { actions } = this.props;
        switch(importType) {
            case 'upload':
                return <Upload />;
            case 'localData':
                return (<LocalData actions={actions} close={this.closeModal} open={this.openModal}
                   />);
        }
    }

    getExportContent = (exportType) => {
        switch(exportType) {
            case 'preview':
                return (<Preview
                    key="0"
                    grids={this.props.grids}
                    columns={this.props.columns}
                    rows={this.props.rows}
                    cellSize={10}
                    duration={5}
                    active={0}
                    animate={this.props.grids.size > 1}
                />);
        }
    }

    getModalContent = (popUpType) => {
        let content;
        switch (popUpType) {
            case 'import':
                content = (
                    <div className='modal-content'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Import</div>
                        {this.getImportContent('localData')}
                    </div>);
                break;
            case 'export':
                content = (
                    <div className='modal-content'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Export</div>
                        {this.getExportContent('preview')}
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
    actions: bindActionCreators(actions, dispatch)
});

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);

export default PopupContainer;
