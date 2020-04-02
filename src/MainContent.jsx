import React from 'react';
import Projects from './Projects';
import Photos from './Photos'

const PAGES = [<Projects />, <Photos />];


const MainContent = (props) => {
    const {page} = props;
    return (
        <div>
            {PAGES[page]}
        </div>
    )

}

export default MainContent;