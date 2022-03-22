import styled from "styled-components";
import { css } from "styled-components";

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

export const Separator = styled.div`
  ${(props) => {
    switch (props.vertical) {
      case true:
        return css`
          background: #e8eaed;
          margin-left: 10px;
          margin-right: 4px;
          width: 1px;
          height: ${(props.height || 30) + "px"};
        `;

      default:
        return css`
          border-top: 1px solid #e8eaed;
          margin: 4px 8px;
        `;
    }
  }}
`;

export const Row = styled.div`
  display: flex;
  font-family: arial, sans-serif;
  flex-direction: row;
  align-items: center;
`;

export const CenterRow = styled(Row)`
  justify-items: center;
`;

export const ActionLink = styled.a`
  font-family: arial, sans-serif;
  color: ${(props) => (props.blue ? "blue" : "rgba(0, 0, 0, 0.5)")};
  font-size: 13px;
  line-height: 24px;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const IconButton = styled.button`
  ${(props) => {
    switch (props.variant) {
      case "flat":
        return css`
          border-radius: 50%;
          border: none;
          padding: 8px;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${(props.width || 40) + "px"};
          height: ${(props.height || 40) + "px"};
          &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.1);
          }
        `;

      case "filled":
        return css`
          border-radius: 50%;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px;
          font-size: 14px;
          color: white;
          background: ${props.color || "rgb(50, 50, 150)"};
          width: ${(props.width || 32) + "px"};
          height: ${(props.height || 32) + "px"};
          &:hover {
            cursor: pointer;
            outline: 5px solid rgba(0, 0, 0, 0.1);
          }
        `;
      default:
        return css`
          border-radius: 50%;
          border: none;
          display: flex;
          margin-left: ${(props.ml || 0) + "px"};
          margin-right: ${(props.mr || 0) + "px"};
          justify-content: center;
          align-items: center;
          background: transparent;
          width: ${(props.width || 32) + "px"};
          height: ${(props.height || 32) + "px"};
          &:hover {
            cursor: pointer;
          }
        `;
    }
  }}
`;

export const SearchBar = styled.div`
  border-radius: 24px;
  width: 40%;
  display: flex;
  flex-direction: column;
  max-height: 100px;
  transition: 0.3s ease max-height;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;

export const FlatInput = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  font-family: arial, sans-serif;
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled.button`
  background-color: rgba(0, 0, 0, 0.025);
  border: none;
  min-width: 128px;
  border-radius: 5px;
  padding: 12px;
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  font-family: arial, sans-serif;
  padding: 8px 14px;
  font-size: 16px;
  margin: 0 -1px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
