import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from '../components/Products'
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
    ${mobile({
        margin:"0px 20px",
        display:'flex',
        flexDirection:'column'
})}
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({margin:'10px 0'})}
`
const Option = styled.option`
padding:10px;
`

const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2]);
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");
    const handleFilters =(e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        })
    }
    console.log(filters);
    console.log(sort);
    return (
        <Container>
            <Navbar/>
            <div style={{marginTop:10}}>
            <Announcement/>
            </div>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled defaultValue="Color">Color</Option>
                        <Option>White</Option>
                        <Option>black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                    </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value={"desc"}>Price (desc)</Option>
                    </Select>
                    </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList