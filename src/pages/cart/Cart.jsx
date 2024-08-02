import styled from 'styled-components';
import CartProducts from './CartProducts';
import CartTotals from './CartTotals';
import RecentlyViewed from '../../components/recent/RecentlyViewed';
import Recommended from '../../components/recommended/Recommended';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.bg_primary_2};
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Wrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    max-width: 1150px;
    align-items: flex-start;
    flex-direction: row;
  }
`;
const Cart = () => {
  const cart = useSelector(state => state.cart.cartItems);
  return (
    <Container>
      {cart?.length === 0 ? (
        <EmptyCart />
      ) : (
        <Wrapper>
          <CartProducts />
          <CartTotals />
        </Wrapper>
      )}
      <RecentlyViewed noTitleBg />
      <Recommended noTitleBg />
    </Container>
  );
};

export default Cart;
