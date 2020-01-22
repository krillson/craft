import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import FontinRegular from './font/fontin-regular.woff'
import FontinSmallCaps from './font/fontin-smallcaps.woff'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'FontinRegular';
        src: url(${FontinRegular})
    }

    @font-face {
        font-family: 'FontinSmallCaps';
        src: url(${FontinSmallCaps})
    }
`

const Container = styled.div`
    background: rgba(0, 0, 0, 0.8);
    color: ${props => props.theme.color};
    font-family: 'FontinSmallCaps', Veranda, serif;
`

const Header = styled.div`
    padding: 10px;
    text-align: center;
`

const theme = {
    magic: {
        color: '#8888ff',
    },
    normal: {
        color: '#c8c8c8',
    },
    rare: {
        color: '#ffff77',
    },
    unique: {
        color: '#af6025',
    }
}

Container.defaultProps = {
    theme: theme.unique  
}

function Item({
    label: {
        labelBaseType,
        labelPrefix,
        labelSuffix,
    },
    rarity,
}) {
    return (
        <ThemeProvider theme={theme[rarity]}>
            <GlobalStyle />
            <Container>
                <Header>
                    {labelPrefix} {labelBaseType} {labelSuffix}
                </Header>
            </Container>
        </ThemeProvider>
    );
}


export default Item
