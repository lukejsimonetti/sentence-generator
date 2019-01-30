import React, {memo} from 'react';
import Select from 'react-select'


let selectedOption = {'label': 'adjective'}

const options = [
  {'label': 'adjective', 'value': 'adjective'},
  {'label': 'adverb', 'value': 'adverb'},
  {'label': 'article', 'value': 'article'},
  {'label': 'conjuction', 'value': 'conjuction'},
  {'label': 'interjection', 'value': 'interjection'},
  {'label': 'noun', 'value': 'noun'},
  {'label': 'verb', 'value': 'verb'}
]
 
const WordTypesDropdown = props => {

    const handleChange = () => {

    } 

    return (
        <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    );
};

export default memo(WordTypesDropdown);