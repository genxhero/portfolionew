import React, {useState} from 'react';
import Projects from './Projects';
import Photos from './Photos'

const PAGES = [<Projects />, <Photos />];


const MainContent = () => {
    const {page} = props;
    return (
        <div>
            {PAGES[page]}
        </div>
    )

}

export default MainContent;