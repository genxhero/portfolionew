import React from 'react';

/**
 * Expected Props 
 *
 * toggle: Function which mutates the state of the parent component, otherwise a noop
 * 
 * TODO: Get propTypes up in here.
 * 
 * @param {*} props 
 */
const AbTestToggle = props => {
    const {toggle, testGroup} = props;
    return (
        <div className="ab-test-toggle">
            <p>This is an A-B test for the page layout. Please try both out and let me know which you like best!</p>
                <button onClick={toggle}>
                    {testGroup === "a" ? "Group A" : "Group B"}
                </button>
        </div>
    )
}

export default AbTestToggle;