import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { customTheme } from '../theme'
import Nav from './nav'

function GlobalLayout({children}) {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset/>
            <Nav/>
            {children}
        </ThemeProvider>
    )
}

export default GlobalLayout
