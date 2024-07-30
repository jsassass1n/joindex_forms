import styled from 'styled-components';

interface StyledLoaderProps {
  width?: number;
  height?: number;
}

export const StyledLoader = styled.span<StyledLoaderProps>`
  width: ${({ width }) => (width ? `${width}px` : '20px')};
  height: ${({ height }) => (height ? `${height}px` : '20px')};
  border-radius: 50%;
  display: inline-block;
  border-top: ${(props) => `3px solid ${props.theme.colors.invertedPrimary}`};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
