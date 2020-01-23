import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding: 0 10px;
    text-align: center;

    background:
        url('${props => props.theme.headerBg.left}') top left no-repeat,
        url('${props => props.theme.headerBg.right}') top right no-repeat,
        url('${props => props.theme.headerBg.middle}') top center repeat-x;
`

const Label = styled.div`
    font-size: 19px;
    padding: 3px 0;
`

function Header({
    baseType,
    prefix,
    suffix,
    rarity,
}) {
    const isDouble = rarity === 'unique' || rarity === 'rare'

    return (
        <Container>
            {
                isDouble
                ?
                <Label>
                    <div>{prefix}</div>
                    <div>{baseType} {suffix}</div>
                </Label>
                :
                <Label>
                    <div>{prefix} {baseType} {suffix}</div>
                </Label>
            }
        </Container>
    );
}

export default Header
