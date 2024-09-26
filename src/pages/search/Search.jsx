import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import HomeProductsSkeleton from '../../components/skeleton/HomeProductSkeleton';
import CategoryList from '../../components/category/CategoryList';
import { appwriteService } from '../../appWrite/appwriteService';
const Container = styled.section`
  min-height: 70vh;
  overflow: auto;
`;
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchTerm, setSerchTerm] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategoryProducts = useCallback(async () => {
    try {
      setLoading(true);
      const products = await appwriteService.search(
        searchTerm,
        location?.state?.brand
      );
      setProducts(products);
      console.log('products', products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    setSerchTerm(searchParams.get('search'));
  }, [searchParams]);
  useEffect(() => {
    searchTerm && getCategoryProducts();
  }, [searchTerm, getCategoryProducts]);
  return (
    <Container>
      {loading ? (
        <HomeProductsSkeleton fill />
      ) : (
        <CategoryList products={products} />
      )}
    </Container>
  );
};

export default Search;
