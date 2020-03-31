import React, {useState} from 'react';
import Projects from './Projects';

const PAGES = [<Projects />];

const MainContent = () => {
    const [page, setPage] = useState(0)
    return (
        <div>
            {PAGES[page]}
        </div>
    )

}

export default MainContent;