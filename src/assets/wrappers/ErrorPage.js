import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 70%;
    margin-top: -4rem;
  }
  h3 {
    margin-top: 2rem;
    color: var(--grey-900);
  }
  p {
    margin-top: 1rem;
    color: var(--grey-500);
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  a {
    display: block;
    margin-top: 1rem;
    color: var(--primary-500);
    font-size: 20px;
    font-weight: 400;
  }
`;

export default Wrapper;
