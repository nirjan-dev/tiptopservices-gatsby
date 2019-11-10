import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { customTheme } from '../theme'

function GlobalLayout({children}) {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset/>
            {children}
        </ThemeProvider>
    )
}

export default GlobalLayout
