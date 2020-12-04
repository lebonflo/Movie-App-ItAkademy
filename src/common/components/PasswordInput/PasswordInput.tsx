import React, {useState, MutableRefObject} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconName} from '@fortawesome/fontawesome-svg-core';

import {Container, Input, RightIconWrapper} from './PasswordInput.s';

type Props = {
  label: string;
  onChange: (e: string) => void;
  value: string;
  pwdRef: MutableRefObject<any>;
  onSubmitEditing: () => void;
};

const PasswordTextBox = ({
  label,
  onChange,
  value,
  pwdRef,
  onSubmitEditing,
}: Props) => {
  const [icon, setIcon] = useState('eye-slash');
  const [password, setPassword] = useState(true);

  const changeIcon = () => {
    setIcon(icon === 'eye' ? 'eye-slash' : 'eye');
    setPassword(!password);
  };
  return (
    <Container>
      <Input
        value={value}
        placeholder={label}
        secureTextEntry={password}
        onChangeText={(e: string) => onChange(e)}
        onSubmitEditing={onSubmitEditing}
        ref={pwdRef}
      />
      <RightIconWrapper onPress={() => changeIcon()}>
        <FontAwesomeIcon size={24} icon={icon as IconName} />
      </RightIconWrapper>
    </Container>
  );
};

export default PasswordTextBox;
