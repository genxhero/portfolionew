import React, {useState} from 'react';
import Projects from './Projects';

const PAGES = [<Projects />]

const MainContent = () => {
    const [panel, setPanel] = useState(0)
    return (
        <div>
            {PAGES[panel]}
        </div>
    )

}

export default MainContent;