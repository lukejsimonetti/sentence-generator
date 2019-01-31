import React, { memo, useState } from 'react'
import {sample} from 'lodash'

export const WordAPIContext = React.createContext({})

var dictionary = {
    adjective: ['bogus', 'boss', 'gnarlatious', 'hairy', 'outrageous', 'rad', 'stoked'],
    adverb: ['bogusly', 'gnarlatiously', 'tubularly'],
    article: ['a', 'the'],
    conjuction: ['and', 'but'],
    interjection: ['banzai', 'cowabunga'],
    noun: ['barrel', 'bro', 'bummer', 'dude', 'green room', 'honker', 'neptune cocktail', 'surfari'],
    verb: ['bailed out', 'maxed out', 'shredded', 'tubed', 'wiped out']
  };

  // don't edit below this line!
  const getRandomWordFromAPI = (type, callback) => {
    return setTimeout(function() {
      callback(
        type in dictionary ?
        sample(dictionary[type]) :
        null
      );
    }, (Math.random() * 750 + 250));
  }

const WordAPIProvider = props => {

    const [wordList, setWordList] = useState([])

    const generateWord = (type, callback) => {
        //simulated xhr request
        return getRandomWordFromAPI(type, callback)
    }

    return <WordAPIContext.Provider value={{ wordList, setWordList, generateWord }}>{props.children}</WordAPIContext.Provider>
}

export default memo(WordAPIProvider)
