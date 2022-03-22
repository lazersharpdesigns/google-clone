import styled from "styled-components";

export const Link = styled.a`
  font-family: arial, sans-serif;
  color: rgba(0, 0, 0, 84);
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline solid rgba(0, 0, 0, 84);
  }
`;
