import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

const Container = styled.div`
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
`

const Header = styled.div`
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
`

const theme = {
    magic: {
        primary: '#8888ff',
    },
    normal: {
        primary: '#c8c8c8',
    },
    rare: {
        primary: '#ffff77',
    },
    unique: {
        primary: '#af6025',
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
            <Container>
                <Header>
                    {labelPrefix} {labelBaseType} {labelSuffix}
                </Header>
            </Container>
        </ThemeProvider>
    );
}


export default Item
