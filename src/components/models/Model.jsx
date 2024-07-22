import styled from 'styled-components';
import ReactDom from 'react-dom';
const Wrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 666;
  padding: ${props => (props.full ? '0' : `${0.5} px`)};
  background: ${props => props.bg};
  &.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1000;
    background-color: gray;
  }
  .close .icon {
    color: white;
    font-size: 2rem;
  }
`;
const Model = ({ children, bg, center, closeModel, full }) => {
  const handleClick = () => {
    closeModel && closeModel(false);
  };
  return ReactDom.createPortal(
    <Wrapper
      bg={bg}
      className={center && 'center'}
      full={full}
      onClick={handleClick}
    >
      {children}
    </Wrapper>,
    document.getElementById('model')
  );
};

export default Model;
