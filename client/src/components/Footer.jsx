import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Container = styled.div`
    display:flex;

`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`

`
const SocialContainer = styled.div`
    flex:1;
    
`
const SocialIcon = styled.div`
    flex:1;
    
`

const Center = styled.div`
    flex:1;
    
`
const Right = styled.div`
    flex:1;
    
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Harsh.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat perspiciatis perferendis ad nemo et. Consequatur molestias placeat aut ea beatae vitae vel expedita sit sint veritatis ullam quod corrupti corporis, deserunt labore dolore praesentium velit quasi maxime inventore harum dolorum libero! Nisi aliquid omnis soluta?</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon/>
                    </SocialIcon>
                    {/* <SocialIcon></SocialIcon> */}
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer