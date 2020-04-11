import React from 'react'; 
import PropTypes from 'prop-types';

const Tooltip = props => {
    const {background, color, message, direction} = props;
    const style = {"color":color, "background": background}
    return (
        <div className="tooltip" style={style}>
        </div>
    )
}

export default Tooltip;