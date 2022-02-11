import styled from "styled-components";

export const Container = styled.button`
  padding: 0.875rem 1.625rem;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--light);
  background: transparent;
  border-radius: 0.25rem;
  border: 1px solid var(--purple);

  transition: background 0.2s ease-in;

  cursor: pointer;

  &:hover {
    background: var(--purple);
  }
`;
