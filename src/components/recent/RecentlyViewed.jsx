import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../products/ProductList';
import { useSelector } from 'react-redux';
import { appwriteService } from '../../appWrite/appwriteService';
const Wrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  background-color: ${props => props.theme.bg_white};
`;
const RecentlyViewed = ({ noTitleBg }) => {
  const [recent, setRecent] = useState([]);
  const user = useSelector(state => state.user.currentUser);
  const getRecent = useCallback(async () => {
    try {
      const products = await appwriteService.getRecentProducts(user?.email);
      setRecent(products);
    } catch (error) {
      console.log(error);
    }
  }, [user]);
  useEffect(() => {
    user?.email && getRecent();
  }, [getRecent, user]);
  if (!user) return;
  return (
    <>
      {recent.length > 0 && (
        <Wrapper>
          <ProductList
            showFav
            noTitleBg={noTitleBg}
            category='recent'
            title='recently viewed'
          />
        </Wrapper>
      )}
    </>
  );
};

export default RecentlyViewed;
