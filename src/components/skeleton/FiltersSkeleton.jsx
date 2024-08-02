import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  max-width: 300px;
  position: sticky;
  background-color: white;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
`;
const FiltersSkeleton = () => {
  return (
    <Container>
      {Array(10).fill(
        <Skeleton
          variant='rectangular'
          width='100%'
        />
      )}
    </Container>
  );
};

export default FiltersSkeleton;
