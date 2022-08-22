import styled from "styled-components";

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerBody = styled.div`
  width: 70px;
  height: 70px;
  border: 7px solid rgba(163, 151, 198, 0.2);
  border-top: 7px solid rgba(163, 151, 198, 1);
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 2s linear infinite;
`;
