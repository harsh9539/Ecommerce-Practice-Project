import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios';
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:
`
const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:8000/api/products/?category=${cat}` : "http://localhost:8000/api/products/")
                // console.log(res.data);
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )
    }, [cat, filters, products])

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        }
        else if (sort === 'asc') {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        }
        else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])
    return (
        <Container>
            {
                cat
                    ? filteredProducts.map((item, key) => (<Product item={item} key={key} />))
                    : products.slice(0,8).map((item, key) => (<Product item={item} key={key} />))
            }
        </Container>
    )
}

export default Products