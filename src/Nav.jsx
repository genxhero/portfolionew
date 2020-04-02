import React from 'react';

const Nav = (props) => {
    const {navigate, page} = props
    console.log(props)
    return (
        <div className="nav">
            <span className={`nav-link ${page === 0 ? 'active': ''}`} onClick={navigate} name="0">Projects</span>
            <span className={`nav-link ${page === 1 ? 'active' : ''}`} onClick={navigate} name="1">Photos</span>
        </div>
    )

}

export default Nav;
