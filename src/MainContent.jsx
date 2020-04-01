import React, {useState} from 'react';
import Projects from './Projects';

const PAGES = [<Projects />];


const MainContent = () => {
    const {page} = props;
    return (
        <div>
            {PAGES[page]}
        </div>
    )

}

export default MainContent;