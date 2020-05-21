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
          <h5>GITHUB: <a target="_blank" href="https://github.com/ftlll/pixel">FTL</a></h5>
          {/* <iframe
            src="https://ghbtns.com/github-btn.html?user=ftlll&repo=pixel&type=star&count=false"
            frameBorder="0" scrolling="0" width="100px" height="20px"
          >
          </iframe> */}
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