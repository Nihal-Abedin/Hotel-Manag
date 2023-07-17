import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  /* grid-column: 1 / -1; */
`;
const Header = () => {
  console.log("HEader")
  return (
    <StyledHeader>
      <p>Header</p>
    </StyledHeader>
  );
};

export default Header;
