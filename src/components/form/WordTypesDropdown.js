import React, { memo } from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types'
import { wordTypes } from '../misc/data'

const WordTypesDropdown = ({ onChange, initialValue, index, meta }) => {
    return (
        <>
            <Select
                onChange={e => onChange(e)}
                defaultValue={(index === 0) ? initialValue : ""}
                options={wordTypes}
            />
            {meta.error && meta.touched && <span className="text text-danger">{meta.error}</span>}
        </>
    );
};

Select.propTypes = {
    input: PropTypes.object,
    initialValue: PropTypes.object,
    index: PropTypes.number,
    meta: PropTypes.object
};

export default memo(WordTypesDropdown);