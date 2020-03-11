import React from 'react';
import Modal from 'react-awesome-modal';

class Popup extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         visible : false
    //     }
    // }
    render() {
        return (
            <Modal 
                visible={this.props.visible}
                
                effect="fadeInUp"
                onClickAway={() => this.props.close()}>
                <div>
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a onClick={() => this.props.close()}>Close</a>
                </div>
            </Modal>
        );
    }
}

export default Popup;
