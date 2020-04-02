import React from 'react';
import Projects from './Projects';
import Photos from './Photos'

const PAGES = [<Projects />, <Photos />];


const MainContent = (props) => {
    const {page} = props;
    return (
        <div className="main-content">
            {PAGES[page]}
        </div>
    )

}

export default MainContent;