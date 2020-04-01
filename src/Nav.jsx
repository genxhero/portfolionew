import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    const {navigate} = props
    return (
        <div>
            <span onClick={navigate} name="0">Projects</span>
            <span onClick={navigate} name="1">Photos</span>
        </div>
    )

}

export default Nav;
