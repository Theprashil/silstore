import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 30%;

  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: white;
  }
  .cartbutton {
    // display: none;
    margin: 1rem;
  }

  @media (max-width: 768px) {
    // display: none;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    background-color: rgb(34, 34, 34);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    padding: 7rem 2rem;
    font-size: 3rem;
    text-align: center;
  }
`;

const Button = styled.div`
  margin-right: 3.1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

function RightNav({ open, onShow }) {
  return (
    <>
      <Ul open={open}>
        <li>
          <a href="#top">About</a>
        </li>
        <li>
          <a href="#top">Contact</a>
        </li>
        <li>
          <a href="#top">Categories</a>
        </li>
      </Ul>
      <Button>
        <HeaderCartButton onShow={onShow} />
      </Button>
    </>
  );
}
export default RightNav;
