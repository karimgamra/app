import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    color: var(--primary-500);
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 0.3rem;
  }
  .nav-links .nav-link {
    color: var(--grey-900);
    letter-spacing: 2px;
    transition: var(--transition);
  }
  .nav-links .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500) !important;
  }
  @media screen and (min-width: 799px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      margin-top: 0;
      flex-direction: row;
    }
  }
`;

export default Wrapper;
