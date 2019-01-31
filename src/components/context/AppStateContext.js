import React, { memo, useState } from 'react'

export const AppStateContext = React.createContext({})

const AppStateProvider = props => {

    const [isSubmitting, setIsSubmitting] = useState(false)

    return <AppStateContext.Provider value={{ isSubmitting, setIsSubmitting }}>
        {props.children}
    </AppStateContext.Provider>
}

export default memo(AppStateProvider)
