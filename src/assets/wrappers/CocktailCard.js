import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  .footer {
    height: 250px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  h4 {
    font-weight: 700;
  }

  p {
    margin-bottom: 1rem;
    color: var(--grey-500);
    color: var(--grey-500);
  }
  a {
    display: block;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: var(--white);
    background-color: var(--primary-500);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 2rem;
  }
  img {
    max-width: 100%;
  }
`;

export default Wrapper;
