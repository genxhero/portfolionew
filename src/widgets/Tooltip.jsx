import React from 'react'; 
import PropTypes from 'prop-types';
import {positionFinder} from '../helpers/helpers';

const Tooltip = props => {
    const {background, color, message, direction, hidden} = props;
    const orientation = positionFinder(direction);
    const style = {"color": color, "background": background, [orientation.name]: `${orientation.value}` }
    console.log(style)
    return (
        <div className={`tooltip ${hidden ? 'hidden' : ''} ${direction}`} style={style}>
             {message} 
        </div>
    )
}

Tooltip.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    message: PropTypes.string,
    direction: PropTypes.string,
    hidden: PropTypes.bool
}

export default Tooltip;