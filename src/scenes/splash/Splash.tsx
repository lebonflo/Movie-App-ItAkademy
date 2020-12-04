import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import FontAwesomeSpin from '@/common/components/FontAwesomeSpin';
import useTheme from '@/hooks/useTheme';
import logoSrc from '@/assets/logo/it-akademy.png';

import {Container, LogoContainer, SpinnerContainer, Logo} from './Splash.s';

function Splash() {
  const theme = useTheme();

  return (
    <Container>
      <LogoContainer>
        <Logo source={logoSrc} />
      </LogoContainer>
      <SpinnerContainer>
        <FontAwesomeSpin>
          <FontAwesomeIcon
            size={50}
            color={theme.colors.primary}
            icon="circle-notch"
          />
        </FontAwesomeSpin>
      </SpinnerContainer>
    </Container>
  );
}

export default Splash;
