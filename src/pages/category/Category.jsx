import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import CategoryList from '../../components/category/CategoryList';
import RecentlyViewed from '../../components/recent/RecentlyViewed';
import { useState } from 'react';
import CategoryTitles from '../../components/category/CategoryTitles';
import TopPics from '../../components/category/TopPics';
import { useEffect } from 'react';
import { getRandomNumbers } from '../../components/lib/lib';
import { useSearchParams } from 'react-router-dom';
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
const Category = () => {
  const [showTopPics, setShoTopPics] = useState(true);
  const params = useSearchParams();
  const [showCategory, setShowCategory] = useState(true);
  const space = [true, false];
  const SHOW_CATEGORY_SPACE = ['recent', 'top-picks', 'recommended'];
  useEffect(() => {
    //new Date().getDay() === 5 will turn true when the day of the week is friday
    const tempShow = space[getRandomNumbers(0, 1)] || new Date().getDay() === 5;
    setShoTopPics(tempShow);
    setShowCategory(SHOW_CATEGORY_SPACE.includes(params[0].get('category')));
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
      <CategoryList />
      <RecentlyViewed noTitleBg />
    </Container>
  );
};

export default Category;
