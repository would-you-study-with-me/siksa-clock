import styled from '@emotion/styled';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/spinner.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 50px;
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} width={100} height={100} />
    </LoadingContainer>
  );
};

export default Loading;
