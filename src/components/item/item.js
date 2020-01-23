import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import FontinRegular from './font/fontin-regular.woff'
import FontinSmallCaps from './font/fontin-smallcaps.woff'
import Header from './header'
import ItemThemes from './theme'

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

function Item({
    label: {
        labelBaseType,
        labelPrefix,
        labelSuffix,
    },
    rarity,
}) {
    return (
        <ThemeProvider theme={ItemThemes[rarity]}>
            <GlobalStyle />
            <Container>
                <Header 
                    baseType={labelBaseType} 
                    prefix={labelPrefix} 
                    suffix={labelSuffix}
                    rarity={rarity}
                ></Header>
            </Container>
        </ThemeProvider>
    );
}

export default Item
