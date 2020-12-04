import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 8px 25px 8px 8px;
  font-size: ${(props) => props.theme.font.sizes.medium};
  border-color: #d3d3d3;
  border-bottom-width: 1px;
`;

export const RightIconWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 25%;
  right: 0;
  bottom: 0;
`;
