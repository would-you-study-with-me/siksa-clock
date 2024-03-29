import styled from '@emotion/styled';

const Modal = styled.div`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: white;
`;

export const S = {
  Modal,
  Container,
};
