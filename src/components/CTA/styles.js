import styled from "styled-components";

export const Container = styled.div`
  width: 66%;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
  margin-top: 14.8rem;
  gap: 4rem;

  ::before {
    content: "";
    width: 100%;
    height: 31rem;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    margin-top: 14.8rem;

    @media (max-width: 768px) {
      margin-top: 9rem;
    };

    @media (max-width: 860px) {
      height: 40rem;
    };

    @media (max-width: 840px) {
      height: 50rem;
    };
  };

  @media (max-width: 768px) {
    margin-top: 9rem;
  };

  @media (max-width: 840px) {
    flex-direction: column;
  };

  @media (max-width: 1120px) {
    width: 90%;
  };
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    width: 28rem;
  };

  p {
    max-width: 28rem;
    margin: 2rem 0;
  };

  button {
    width: fit-content;
  };

  @media (max-width: 840px) {
    align-items: center;
    text-align: center;
  };
`;

export const Image = styled.div`
  img {
    object-fit: cover;
    width: 33rem;
    height: 36.8rem;
    border-radius: ${({ theme }) => theme.border.radius};
  };

  @media (max-width: 840px) {
    margin: 0 auto;

    img {
      width: auto;
      height: auto;
      max-width: 33rem;
      max-height: 36.8rem;
    };
  };
`;