import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem;
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 100px;
  max-height: 70px;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const FileViewer = ({ setCurrentImage, images = [] }) => {
  if (images.length <= 1) return;
  return (
    <Container>
      {images?.map((item, index) => (
        <Image
          onClick={() => setCurrentImage(item)}
          key={index}
          src={item}
        />
      ))}
    </Container>
  );
};

export default FileViewer;
