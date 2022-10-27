import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import MapIcon from '@mui/icons-material/Map';
import { mobile } from '../responsive';
const Container = styled.div`
    display:flex;
    ${mobile({
        flexDirection:'column'
    })}

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
    margin:20px 0;
`
const SocialContainer = styled.div`
    display:flex;
    
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background:#${props=>props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:'none'})}

`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin:0 0 10px 0;
`
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({background:"#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Harsh.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat perspiciatis perferendis ad nemo et. Consequatur molestias placeat aut ea beatae vitae vel expedita sit sint veritatis ullam quod corrupti corporis, deserunt labore dolore praesentium velit quasi maxime inventore harum dolorum libero! Nisi aliquid omnis soluta?</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color='e4405f'>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color='55acee'>
                        <TwitterIcon/>
                    </SocialIcon>
                    {/* <SocialIcon></SocialIcon> */}
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MapIcon style={{marginRight:10}}/>
                    Patel Nagar street No.6
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:10}}/>
                    +91-9588549901
                </ContactItem>
                <ContactItem>
                    <MailIcon style={{marginRight:10}}/>
                    goyalh9539@gmail.com
                </ContactItem>
                <Payment height="30px" src="https://customgolfcartscolumbia.com/wp-content/uploads/2011/11/Credit-Card-Logos.jpg" />
            </Right>
        </Container>
    )
}

export default Footer