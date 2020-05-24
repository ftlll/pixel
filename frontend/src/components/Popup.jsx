import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-awesome-modal';
import Select from 'react-dropdown-select';
import Preview from './Preview';
import Upload from './Upload';
import LocalData from './LocalData';
import Download from './Download';
import DisplayCSS from './DisplayCSS';
import * as actions from '../redux/actions/action';

class Popup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: []
        };
        this.closeModal = () => {
            props.close();
        };
        this.openModal = () => {
            this.props.visible = true
        };
    }

    changeType = (value) => {
        this.setState({type: value[0].value});
    }

    getImportContent = (importType) => {
        const { actions } = this.props;
        switch(importType) {
            case 'upload image':
                return <Upload />;
            case 'local data':
                return (<LocalData actions={actions} close={this.closeModal} open={this.openModal}
                   />);
            default:
                return (<LocalData actions={actions} close={this.closeModal} open={this.openModal}
                    />);
        }
    }

    getExportContent = (exportType) => {
        let content, gifPreview;
        const { grids, columns, rows, cellSize, duration, active } = this.props;
        const style = {textAlign: 'center'};
        switch(exportType) {
            case 'download files':
                gifPreview = (
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
                content = (
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
            case 'get css data (current frame)':
                return (
                    <DisplayCSS 
                        grids={grids}
                        columns={columns}
                        rows={rows}
                        size={cellSize}
                        duration={duration}
                        active={active}
                        animate={false}
                    />
                );
            case 'get css data (animation)':
                return (
                    <DisplayCSS 
                    grids={grids}
                    columns={columns}
                    rows={rows}
                    size={cellSize}
                    duration={duration}
                    active={active}
                    animate={true}
                />
                );
            default: 
                gifPreview = (
                    <div className='preview-animation'>
                        <div style={style}>Animation</div>
                        <Preview
                            key="0"
                            grids={grids}
                            columns={columns}
                            rows={rows}
                            cellSize={cellSize}
                            duration={duration}
                            active={active}
                            animate={true}
                        />
                        <Download type={'gif'}/>
                    </div>
                );
                content = (
                    <div className='preview-content'>
                        <div className={`preview-frame ${grids.size > 1 ? '' : 'only'}`}>
                            <div style={style}>Current Frame</div>
                            <Preview
                                key="0"
                                grids={grids}
                                columns={columns}
                                rows={rows}
                                cellSize={cellSize}
                                duration={duration}
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
                    duration={duration}
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
        let content, options;
        switch (popUpType) {
            case 'import':
                options = [{
                    value: 'local data',
                }, { value: 'upload image' }]
                content = (
                    <div className='popup'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Import</div>
                        <div className='dropdown-select'>
                            <Select options={options} values={[{value: 'local data'}]}
                                onChange={this.changeType}
                                labelField='value' searchable={false}/>
                        </div>
                        {this.getImportContent(this.state.type)}
                    </div>);
                break;
            case 'export':
                options = [{
                    value: 'download files',
                }, { 
                    value: 'get css data (current frame)'
                }, { value: 'get css data (animation)' } ]
                content = (
                    <div className='popup'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Export</div>
                        <div className='dropdown-select'>
                            <Select options={options} values={[{value: 'download images'}]}
                                onChange={this.changeType}
                                labelField='value' searchable={false}/>
                        </div>
                        {this.getExportContent(this.state.type)}
                    </div>
                );
                break;
            case 'preview':
                content = (
                    <div className='popup'>
                        <button className='popup-close' onClick={() => this.props.close()}>x</button>
                        <div className='popup-header'>Preivew</div>
                        {this.getPreviewContent()}
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
