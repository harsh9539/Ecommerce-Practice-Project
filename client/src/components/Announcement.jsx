import React from 'react'
import styled from "styled-components"



const Container = styled.div`
    height:30px;
    background:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:500;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal free shipping Orders above 50$
        </Container>
    )
}

export default Announcement
