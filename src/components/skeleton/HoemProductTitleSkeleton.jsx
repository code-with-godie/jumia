import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.3rem;
`;
const HoemProductTitleSkeleton = () => {
  return (
    <Container>
      <Skeleton
        variant='rectangular'
        width={'100%'}
        height={'30px'}
      />
    </Container>
  );
};

export default HoemProductTitleSkeleton;
