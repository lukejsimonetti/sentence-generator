
import React, { memo } from 'react'

import WordAPIProvider from './context/WordAPIContext'
import AppStateProvider from './context/AppStateContext'

const GlobalProvider = props => {

    return (
        <AppStateProvider>
            <WordAPIProvider>
                {props.children}
            </WordAPIProvider>
        </AppStateProvider>
    )
}

export default memo(GlobalProvider)
