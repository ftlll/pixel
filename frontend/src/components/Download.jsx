import React from 'react';
import { connect } from 'react-redux';
import FileSaver from 'file-saver';

const Download = props => {
    const { canvas } = props;
    const downloadIMG = () => {
        fetch('http://localhost:5000/api/img', {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                grids: canvas.get('grids'),
                columns: canvas.get('columns'),
                rows: canvas.get('rows'),
                active: canvas.get('active'),
            }),
        }).then(res => {
            return res.blob();
        })
        .then(blob => {
            FileSaver.saveAs(blob, 'pil.gif');
        })
    }

    return (
        <div onClick={downloadIMG}>DOWNLOAD</div>
    );
};

const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    return {
        canvas
    };
};

const mapDispatchToProps = dispatch => ({
  
});

const DownloadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
export default DownloadContainer;