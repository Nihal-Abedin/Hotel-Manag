import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Sort from "./Sort";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active === "true" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
FilterButton.defaultProps = {
  active: "",
};

const Filter = ({ filterField, options }) => {
  const [serachParams, setSearchParams] = useSearchParams();
  const currentFilter = serachParams.get(filterField) || options[0].value;

  const handleClick = (value) => {
    serachParams.set(filterField, value);
    setSearchParams(serachParams);
  };

  return (
    <>
      <StyledFilter>
        {options.map((op) => (
          <FilterButton
            key={op.value}
            active={op.value === currentFilter ? "true" : "false"}
            onClick={() => handleClick(op.value)}
          >
            {op.label}
          </FilterButton>
        ))}
      </StyledFilter>
      <Sort
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-dec",
            label: "Sort by name (Z-A)",
          },
          {
            value: "regular_price-asc",
            label: "Sort by price (low first)",
          },
          {
            value: "regular_price-dec",
            label: "Sort by price (high first)",
          },
          {
            value: "max_capacity-asc",
            label: "Sort by capacity (low first)",
          },
          {
            value: "max_capacity-dec",
            label: "Sort by capacity (high first)",
          },
        ]}
      />
    </>
  );
};

export default Filter;
