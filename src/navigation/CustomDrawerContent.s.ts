import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 80px 24px;
`;

export const Header = styled.View`
  position: absolute;
  height: 56px;
  background: ${(props) => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  top: 0px;
  left: 0px;
  right: 0px;
`;

export const TextHeader = styled.Text`
  color: white;
  font-size: ${(props) => props.theme.font.sizes.extraLarge};
  font-weight: 500;
`;

export const Footer = styled.View`
  position: absolute;
  height: 56px;
  padding-left: 24px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;
