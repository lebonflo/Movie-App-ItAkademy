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
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';

import {
  Container,
  SignInButton,
  SignInButtonText,
  InputBox,
  InputPasswordContainer,
  LoaderWrapperSignIn,
  SignInButtonContainer,
  InputsContainer,
  LogoContainer,
  Logo,
  SignUpButton,
  SignUpButtonText,
} from './SignIn.s';

function SignIn() {
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
      await Firebase.auth().signInWithEmailAndPassword(
        email.trim().toLocaleLowerCase(),
        password.trim(),
      );
      setIsLoading(false);
      navigation.navigate(routes.home);
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

      <SignInButtonContainer>
        <SignInButton onPress={handleLogin}>
          <SignInButtonText>Connexion</SignInButtonText>
          {isLoading ? (
            <LoaderWrapperSignIn>
              <FontAwesomeSpin>
                <FontAwesomeIcon
                  size={25}
                  color={theme.colors.white}
                  icon="circle-notch"
                />
              </FontAwesomeSpin>
            </LoaderWrapperSignIn>
          ) : null}
        </SignInButton>
        <SignUpButton onPress={() => navigation.navigate(routes.signUp)}>
          <SignUpButtonText>Inscription</SignUpButtonText>
        </SignUpButton>
      </SignInButtonContainer>
    </Container>
  );
}

export default SignIn;
