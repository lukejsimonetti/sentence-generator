
import React, { memo } from 'react'

import WordAPIProvider from './context/WordAPIContext'

const GlobalProvider = props => {
    
    return (
        <WordAPIProvider>{props.children}</WordAPIProvider>
    )
}

export default memo(GlobalProvider)
