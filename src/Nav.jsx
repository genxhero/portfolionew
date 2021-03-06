import React from 'react';
import PropTypes from 'prop-types';
/**
 * Expected Props
 * 
 * navigate: Function
 * page: Integer
 * testGroup: String one of ["a", "b"]
 * @param {*} props 
 */

const Nav = (props) => {
    const {navigate, page, testGroup} = props
    return (
        <div className="nav">
            <span className={`nav-link ${page === 0 ? 'active': ''}`} onClick={navigate} name="0">Projects</span>
            <span className={`nav-link ${page === 1 ? 'active' : ''}`} onClick={navigate} name="1">Photos</span>
            {testGroup === "b" && <span className={`nav-link ${page === 2 ? 'active' : ''}`} onClick={navigate} name="2">About Me</span>}
        </div>
    )

}

Nav.propTypes = {
    navigate: PropTypes.func,
    page: PropTypes.number,
    testGroup: PropTypes.string
}

export default Nav;
