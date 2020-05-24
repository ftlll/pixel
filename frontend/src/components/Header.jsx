import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../redux/actions/action';

const Header = ({ changeName, name }) => {
    
    return (
      <div className='header'>
        <div className='title'>
          <h2> PIXEL ART HUB </h2>
        </div>
        <div className="author">
          <h5>GITHUB: <a href="https://github.com/ftlll/pixel" target="_blank" rel='noopener noreferrer'>FTL</a></h5>
        </div>
      </div>
    );
};

const mapStateToProps = state => {
    const grids = state.present.get('canvas');
    return {
        name: grids.get('name')
    };
};

const mapDispatchToProps = dispatch => ({
    changeName: () => dispatch(changeName)
});
  
const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;