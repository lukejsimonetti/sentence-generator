import React, { memo } from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types'
import { wordTypes } from '../misc/data'

const WordTypesDropdown = ({ input, initialValue }) => {
    return (
        <Select
            onChange={(e) => input.onChange(e)}
            defaultValue={initialValue} 
            options={wordTypes} 
        />
    );
};

Select.propTypes = {
    input: PropTypes.object,
    initialValue: PropTypes.object
};

export default memo(WordTypesDropdown);