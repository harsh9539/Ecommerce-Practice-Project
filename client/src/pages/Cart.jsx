import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'
const Container = styled.div`

`
const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:10})}

`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopTexts=styled.div`
${mobile({display:'none'})}

`
const TopText =styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0 10px;

`
const TopButton =styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props=>props.type === 'filled' &&"none"};
    background: ${props=>props.type === 'filled' ?"black":"transparent"};
    color: ${props=>props.type === 'filled' ?"white":"black"}
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
${mobile({flexDirection:'column'})}

`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:'column'})}
`

const ProductDetial= styled.div`
    flex:2;
    display:flex;
`

const Image = styled.img`
    width:200px;
`

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background:${props=>props.color}
`

const ProductSize = styled.span``

const PriceDetial = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`

const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:'5px 15px'})}
`

const ProductPrice = styled.span`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:'20px'})}
`

const Hr = styled.hr`
background-color:#eee;
border:none;
height:2px;
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`
const SummaryTitle = styled.h1`
    font-weight:200;
`
const SummaryItem = styled.div`
    margin:30px 0;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === "total" && "500"};
    font-size:${props=>props.type === "total" && "24px"}
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width:100%;
    padding:10px;
    background:black;
    color:white;
    font-weight:600;
`





const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <div style={{marginTop:10}}>
            <Announcement/>
            </div>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetial>
                                    <Image  src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665202720_3657015.jpg?format=webp&w=1080&dpr=1.3"/>
                                    <Details>
                                        <ProductName>
                                            <b>Product: </b>Shoes
                                        </ProductName>
                                        <ProductId>
                                            <b>ID </b>3432432
                                        </ProductId>
                                        <ProductColor color='gray'/>
                                        <ProductSize>
                                            <b>Size: </b>
                                            37.5
                                        </ProductSize>
                                    </Details>
                                </ProductDetial>
                                <PriceDetial>
                                    <ProductAmountContainer>
                                        <AddIcon/>
                                        <ProductAmount>
                                            2
                                        </ProductAmount>
                                        <RemoveIcon/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$30</ProductPrice>
                                </PriceDetial>
                            </Product>
                            <Hr/>
                            <Product>
                                <ProductDetial>
                                    <Image  src="https://cdn.shopify.com/s/files/1/0094/6326/7379/products/4136-P26_1_720x.jpg?v=1656506264"/>
                                    <Details>
                                        <ProductName>
                                            <b>Product: </b>Shirt
                                        </ProductName>
                                        <ProductId>
                                            <b>ID </b>34323432
                                        </ProductId>
                                        <ProductColor color='black'/>
                                        <ProductSize>
                                            <b>Size: </b>
                                            37.5
                                        </ProductSize>
                                    </Details>
                                </ProductDetial>
                                <PriceDetial>
                                    <ProductAmountContainer>
                                        <AddIcon/>
                                        <ProductAmount>
                                            2
                                        </ProductAmount>
                                        <RemoveIcon/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$20</ProductPrice>
                                </PriceDetial>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>
                                ORDER SUMMARY
                            </SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$50</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$5</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText >Total</SummaryItemText>
                                <SummaryItemPrice>$50</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart