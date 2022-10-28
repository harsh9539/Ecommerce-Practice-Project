import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../api'
import axios from 'axios'
const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ padding: '10px', flexDirection: 'column' })}
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({ height: '40vh' })}

`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({ padding: 20 })}

`
const Title = styled.h1`
    font-weight:200;
    text-transform:uppercase;
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
${mobile({ width: '100%' })}

`

const Filter = styled.div`
display:flex;
align-items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: ${props => props.color};
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
    ${mobile({ width: '100%' })}
`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
    cursor:pointer;
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
    const location = useLocation();
    const id = (location.pathname.split("/")[2]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`)
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type === 'dec') {
            if (quantity > 1) setQuantity(quantity - 1);
        }
        else setQuantity(quantity + 1);
    }
    const handleClick = ()=>{
        //update cart
        
    }
    return (
        <Container>
            <Navbar />
            <div style={{ marginTop: 10 }}>
                <Announcement />
            </div>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt nisi voluptatem quasi, ullam minus inventore necessitatibus laborum sit voluptatibus deleniti molestiae fugiat iure eligendi voluptates quia. A, error nihil?</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {
                                !product ?
                                    "Loading"
                                    : product.color?.map((c) => (
                                        <FilterColor key={c} color={c} onClick={(e)=>setColor(c)}/>
                                    ))
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {
                                    product.size?.map(s=>(
                                        <FilterSizeOption>{s}</FilterSizeOption>
                                    ))
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;