import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer = styled.div`
    flex:1;
`
const  Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
width:50%;
margin:30px 0;
display:flex;
justify-content:space-between;
`

const Filter = styled.div`
display:flex;
align-items:center;
`

const FilterTitle= styled.span`
font-size:20px;
font-weight:200;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: ${props=>props.color};
margin:0 5px;
cursor:pointer;
`

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`

const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background:white;
    cursor:pointer;
    font-weight:500;
    &:hover{
        background:#f8f4f4;
    }
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://th.bing.com/th/id/OIP.mzP6UTm8ew2mhOFnkwZk_wHaLH?pid=ImgDet&rs=1"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Jeans</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt nisi voluptatem quasi, ullam minus inventore necessitatibus laborum sit voluptatibus deleniti molestiae fugiat iure eligendi voluptates quia. A, error nihil?</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product;