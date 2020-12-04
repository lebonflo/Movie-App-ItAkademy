import React, {useState, useRef} from 'react';
import {Keyboard} from 'react-native';
import Toast from 'react-native-root-toast';

import useTheme from '@/hooks/useTheme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import FontAwesomeSpin from '@/common/components/FontAwesomeSpin';
import PasswordInput from '@/common/components/PasswordInput';
import logoSrc from '@/assets/logo/it-akademy.png';
import Firebase from '@/config/firebase';
import routes from '@/navigation/routes';

import {
  Container,
  SignUpButton,
  SignUpButtonText,
  InputBox,
  InputPasswordContainer,
  LoaderWrapper,
  SignUpButtonContainer,
  InputsContainer,
  LogoContainer,
  Logo,
  SignInButton,
  SignInButtonText,
} from './SignUp.s';
import {useNavigation} from '@react-navigation/native';

function SignUp() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const pwdRef = useRef<any>(null);
  const theme = useTheme();
  const navigation = useNavigation();

  const handleLogin = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      await Firebase.auth().createUserWithEmailAndPassword(
        email.trim().toLocaleLowerCase(),
        password.trim(),
      );
    } catch (e) {
      Toast.show(e.message, {
        duration: 8000,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <LogoContainer>
        <Logo source={logoSrc} />
      </LogoContainer>
      <InputsContainer>
        <InputBox
          placeholder="Email"
          value={email}
          onChangeText={setUsername}
          onSubmitEditing={() => {
            if (pwdRef.current != null) {
              pwdRef.current.focus();
            }
          }}
        />
        <InputPasswordContainer>
          <PasswordInput
            label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e)}
            pwdRef={pwdRef}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </InputPasswordContainer>
      </InputsContainer>

      <SignUpButtonContainer>
        <SignUpButton onPress={handleLogin}>
          <SignUpButtonText>Inscription</SignUpButtonText>
          {isLoading ? (
            <LoaderWrapper>
              <FontAwesomeSpin>
                <FontAwesomeIcon
                  size={25}
                  color={theme.colors.white}
                  icon="circle-notch"
                />
              </FontAwesomeSpin>
            </LoaderWrapper>
          ) : null}
        </SignUpButton>
        <SignInButton onPress={() => navigation.navigate(routes.signIn)}>
          <SignInButtonText>Connexion</SignInButtonText>
        </SignInButton>
      </SignUpButtonContainer>
    </Container>
  );
}

export default SignUp;
