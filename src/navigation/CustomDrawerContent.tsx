import React from 'react';
import {Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  Container,
  Header,
  Footer,
  Content,
  TextHeader,
} from './CustomDrawerContent.s';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{paddingTop: 0, flex: 1}}>
      <Container>
        <Header>
          <TextHeader>Header</TextHeader>
        </Header>
        <Content>
          <Text>Content</Text>
        </Content>
        <Footer>
          <Text>Footer</Text>
        </Footer>
      </Container>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
