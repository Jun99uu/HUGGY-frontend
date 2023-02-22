import styled from "styled-components/native";

export const Title = styled.Text<{ color: string; margin?: string }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
`;

export const TitleBd = styled.Text<{ color: string; margin?: string }>`
  font-size: 20px;
  font-weight: 900;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
`;

export const Subtitle = styled.Text<{ color: string; margin?: string }>`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.color};
  white-space: pre-line;
  text-align: center;
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
`;