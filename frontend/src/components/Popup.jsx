import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-awesome-modal';
import Select from "react-dropdown-select";
import Preview from './Preview';
import Upload from './Upload';
import LocalData from './LocalData';
import Download from './Download';
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
            case 'download':
                const style = {textAlign: 'center'};
                const { grids, columns, rows, duration, active } = this.props;
                let gifPreview = (
                    <div className='preview-animation'>
                        <div style={style}>Animation</div>
                        <Preview
                            key="0"
                            grids={grids}
                            columns={columns}
                            rows={rows}
                            cellSize={10}
                            duration={5}
                            active={active}
                            animate={true}
                        />
                        <Download type={'gif'}/>
                    </div>
                );
                let content = (
                    <div className='preview-content'>
                        <div className={`preview-frame ${grids.size > 1 ? '' : 'only'}`}>
                            <div style={style}>Current Frame</div>
                            <Preview
                                key="0"
                                grids={grids}
                                columns={columns}
                                rows={rows}
                                cellSize={10}
                                duration={5}
                                active={active}
                                animate={false}
                            />
                            <Download className='download-button' type={'png'}/>
                        </div>
                        {grids.size > 1 ? gifPreview : ''}
                    </div>
                );
                return content;
        }
    }

    getPreviewContent = () => {
        const { grids, columns, rows, duration, active } = this.props;
        const style = {textAlign: 'center'};
        let gifPreview = (
            <div className='preview-animation'>
                <div style={style}>Animation</div>
                <Preview
                    key="0"
                    grids={grids}
                    columns={columns}
                    rows={rows}
                    cellSize={10}
                    duration={3}
                    active={active}
                    animate={true}
                />
            </div>
        );
        let content = (
            <div className='preview-content'>
                <div className={`preview-frame ${grids.size > 1 ? '' : 'only'}`}>
                    <div style={style}>Current Frame</div>
                    <Preview
                        key="0"
                        grids={grids}
                        columns={columns}
                        rows={rows}
                        cellSize={10}
                        active={active}
                        animate={false}
                    />
                </div>
                {grids.size > 1 ? gifPreview : ''}
            </div>
        );
        return content;
    }

    getModalContent = (popUpType) => {
        let content;
        switch (popUpType) {
            case 'import':
                content = (
                    <div>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Import</div>
                        {this.getImportContent('localData')}
                    </div>);
                break;
            case 'export':
                content = (
                    <div>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Export</div>
                        {this.getExportContent('download')}
                    </div>
                );
                break;
            case 'preview':
                content = (
                    <div>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Preivew</div>
                        {this.getPreviewContent()}
                    </div>
                );
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
