import React, {memo} from 'react';
import Select from 'react-select'
import {wordTypes} from '../misc/data'

const WordTypesDropdown = ({input}) => {

    return (
        <Select
            {...input}
            options={wordTypes}
      />
    );
};

export default memo(WordTypesDropdown);