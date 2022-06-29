import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {colors} from '../../theme/colors';
import {ButtonText} from './registration-screen';

export const HomeScreen = ({navigation}) => {
  return (
    <MainWrapper>
      <MainButton onPress={() => navigation.navigate('Авторизация')}>
        <ButtonText>Войти</ButtonText>
      </MainButton>
      <MainButton onPress={() => navigation.navigate('Регистрация')}>
        <ButtonText>Зарегистрироваться</ButtonText>
      </MainButton>
    </MainWrapper>
  );
};
const MainWrapper = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const MainButton = styled.TouchableOpacity`
  height: 50px;
  width: 200px;
  background-color: ${colors.darkblue};
  margin-bottom: 30px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;
