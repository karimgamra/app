import styled from "styled-components";

const Wrapper = styled.header`
  text-align: center;
  background-color: red;

  a {
    background: var(--primary-400);
    color: white;
    padding: 10px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
  }
  img {
    max-width: 90%;
    border-radius: 5px;
  }
  .details {
    text-align: left;
    padding: 2rem;
  }
  p {
    margin-bottom: 1.2rem;
    font-size: 1.3rem;
    letter-spacing: 1.4px;
  }
  span {
    background: var(--primary-300);
  }
  @media screen and (min-width: 944px) {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    a {
      position: absolute;
      top: 120px;
      left: 50%;
    }
    .details {
      padding: 0;
    }
    .details p {
      margin-bottom: 2rem;
      line-height: 1.6;
    }
  }
`;

export default Wrapper;
