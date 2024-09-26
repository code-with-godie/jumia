import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import CategoryList from '../../components/category/CategoryList';
import RecentlyViewed from '../../components/recent/RecentlyViewed';
import { useState } from 'react';
import CategoryTitles from '../../components/category/CategoryTitles';
import TopPics from '../../components/category/TopPics';
import { useEffect } from 'react';
import { getRandomNumbers } from '../../components/lib/lib';
import { Link, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { appwriteService } from '../../appWrite/appwriteService';
import HomeProductSkeleton from '../../components/skeleton/HomeProductSkeleton';
import CategoryFilters from '../../components/category/CategoryFilters';
import { ChevronRight } from '@mui/icons-material';
import { useSelector } from 'react-redux';
const Container = styled.section`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.bg_primary_2};
  overflow: auto;
  padding: 0.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
`;
const ProductsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow: auto;
  align-self: stretch;
`;
const Header = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  gap: 0.3rem;
  justify-content: flex-start;
  .link {
    text-decoration: none;
    color: ${props => props.theme.gray_1};
  }
  .icon {
    color: ${props => props.theme.gray_1};
  }
`;
const Category = () => {
  const [showTopPics, setShoTopPics] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const space = [true, false];
  const SHOW_CATEGORY_SPACE = ['recent', 'top-picks', 'recommended'];
  const [filters, setFilters] = useState({ category: null });
  const [searchParams] = useSearchParams();
  const { currentUser: user } = useSelector(state => state.user);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategoryProducts = useCallback(async () => {
    try {
      setLoading(true);

      const products = await appwriteService.filterProducts(
        filters,
        user?.email
      );
      setProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [filters]);
  useEffect(() => {
    const filters = {
      category: searchParams.get('category'),
    };
    const brands = searchParams.get('brands');
    const tags = searchParams.get('tags');
    if (brands) {
      filters.brands = brands.split('&');
      // console.log('brand present', filters);
    }
    if (tags) {
      filters.tags = tags.split('&');
      // console.log('tags present', filters);
    }

    setFilters(filters);
  }, [searchParams]);
  useEffect(() => {
    filters.category && getCategoryProducts();
  }, [filters, getCategoryProducts]);
  useEffect(() => {
    //new Date().getDay() === 5 will turn true when the day of the week is friday
    const tempShow = space[getRandomNumbers(0, 1)] || new Date().getDay() === 5;
    setShoTopPics(tempShow);
    setShowCategory(SHOW_CATEGORY_SPACE.includes(searchParams.get('category')));
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Jumia Kenya | category product</title>
        <meta
          name='description'
          content='jumia is a leading e-commerce platform in Kenya that offers a wide range of products at discounted prices. Browse the latest deals on smartphones, laptops, fashion, beauty,'
        />
      </Helmet>
      {showCategory && <CategoryTitles />}
      {showTopPics && <TopPics />}
      <Header>
        <Link
          className='link'
          to='/'
        >
          Home
        </Link>
        <ChevronRight className='icon' />
        <Link
          to={`/category?category=${filters?.category}`}
          className='link'
        >
          {' '}
          {filters?.category}{' '}
        </Link>
      </Header>
      <ProductsContainer>
        <CategoryFilters />
        {loading ? (
          <HomeProductSkeleton fill />
        ) : (
          <CategoryList
            category={filters?.category}
            products={products}
          />
        )}
      </ProductsContainer>
      <RecentlyViewed noTitleBg />
    </Container>
  );
};

export default Category;
