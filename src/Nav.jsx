import React, {useState} from 'react';

const Nav = (props) => {
    const {navigate} = props
    return (
        <div>
            <span onClick={navigate} name="0">Projects</span>
            <span onClick={navigate} name="1">Photos</span>
        </div>
    )

}

export default Nav;
