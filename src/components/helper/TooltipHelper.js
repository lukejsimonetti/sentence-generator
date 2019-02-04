import React from 'react';
import PropTypes from 'prop-types'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export const TooltipHelper = ({ children, placement, text }) => {
    return (
        <OverlayTrigger
            placement={placement}
            overlay={
                <Tooltip id={text}>{text}</Tooltip>
            }
        >
            {children}
        </OverlayTrigger>
    )
}

TooltipHelper.propTypes = {
    children: PropTypes.object,
    placement: PropTypes.string,
    text: PropTypes.string
}