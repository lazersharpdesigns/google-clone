import styled from "styled-components";

export const Link = styled.a`
  font-family: arial, sans-serif;
  color: rgba(0, 0, 0, 84);
  font-size: 13px;
  line-height: 24px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline solid rgba(0, 0, 0, 84);
  }
`;

export const IconButton = styled.button`
  border-radius: 50%;
  border: none;
  padding: 8px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "38px"};
  height: ${(props) => props.height || "38px"};
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ProfileButton = styled.button`
  border-radius: 50%;
  padding: 12px;
  border: none;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color || "rgb(50, 50, 150)"};
  width: ${(props) => props.width || "32px"};
  height: ${(props) => props.height || "32px"};
  &:hover {
    cursor: pointer;
    outline: 3px solid rgba(0, 0, 0, 0.1);
  }
`;
