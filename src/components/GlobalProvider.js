
import React, { memo } from 'react'

import WordTypeProvider from './context/WordTypeContext'

const GlobalProvider = props => {
    return (
        <WordTypeProvider>{props.children}</WordTypeProvider>
    )
}

export default memo(GlobalProvider)
