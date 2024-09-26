import styled from 'styled-components';
import HomeBanner from '../../components/home/HomeBanner';
import ProductList from '../../components/products/ProductList';
import ProductCategory from '../../components/category/ProductCategory';
import { Helmet } from 'react-helmet';
import HomeProductSkeleton from '../../components/skeleton/HomeProductSkeleton';
import { useEffect, useState } from 'react';
import HoemProductTitleSkeleton from '../../components/skeleton/HoemProductTitleSkeleton';
import { appwriteService } from '../../appWrite/appwriteService';
import RecentlyViewed from '../../components/recent/RecentlyViewed';
import Recommended from '../../components/recommended/Recommended';
import { useSelector } from 'react-redux';
import FlashSales from '../../components/flash/FlashSales';
const Container = styled.section`
  flex: 1;
  background-color: ${props => props.theme.bg_primary_2};
  overflow: auto;
  padding: 0.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const SkeletonWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;
const Home = () => {
  const [categories, setCategories] = useState([]);
  const { currentUser: user } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const getTitles = async () => {
    try {
      setLoading(true);
      const titles = await appwriteService.getCategories();
      setCategories(titles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTitles();
  }, []);
  return (
    <Container>
      <Helmet>
        <title>Jumia Kenya | Online Shoping Mall</title>
        <meta
          name='description'
          content='jumia is a leading e-commerce platform in Kenya that offers a wide range of products at discounted prices. Browse the latest deals on smartphones, laptops, fashion, beauty,'
        />
      </Helmet>
      <HomeBanner />
      <ProductCategory />
      {loading ? (
        <>
          {Array(7).fill(
            <SkeletonWrapper>
              <HoemProductTitleSkeleton />
              <HomeProductSkeleton />
            </SkeletonWrapper>
          )}
        </>
      ) : (
        <>
          {<RecentlyViewed noTitleBg />}
          <Recommended />
          <FlashSales />
          {categories.map((item, index) => (
            <ProductList
              key={index}
              title={item}
              category={item}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
