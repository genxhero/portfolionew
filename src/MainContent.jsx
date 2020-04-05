import React from 'react';
import Projects from './Projects';
import Photos from './Photos'

const MainContent = (props) => {
    const {page} = props;
    return (
        <div className="main-content">
            {page === 0 && <Projects />}
            {page === 1 && <Photos />}
        </div>
    )

}

export default MainContent;