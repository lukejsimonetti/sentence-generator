import React, { memo, useState } from 'react'

export const WordTypeContext = React.createContext({})

const WordTypeProvider = props => {
    const [wordTypes, setWordTypes] = useState({})

    return <WordTypeContext.Provider value={{ wordTypes, setWordTypes }}>{props.children}</WordTypeContext.Provider>
}

export default memo(WordTypeProvider)
