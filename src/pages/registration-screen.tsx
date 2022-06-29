import React from 'react';
import {SafeAreaView} from 'react-native';
import {colors} from '../../theme/colors';
import styled from 'styled-components/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {registration} from '../components/functions/registration';

interface ValuesProps {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
}
export const RegistrationScreen = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    age: 0,
    email: '',
    password: '',
  };
  const validationSchema = yup.object({
    firstname: yup.string().required('required'),
    lastname: yup.string().required('required'),
    age: yup.number().required('required'),
    email: yup.string().required('required'), //email
    password: yup.string().required('required'),
  });
  const onSubmit = (values: ValuesProps) => {
    registration(values);
  };

  return (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({values, handleChange, handleBlur, handleSubmit}) => (
          <FormikView>
            <CustomInput
              placeholder="Имя"
              onChangeText={handleChange('firstname')}
              onBlur={handleBlur('firstname')}
              value={values.firstname}
            />
            <CustomInput
              placeholder="Фамилия"
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              value={values.lastname}
            />
            <CustomInput
              placeholder="Возраст"
    
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={String(values.age)}
            />
            <CustomInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <CustomInput
              placeholder="Пароль"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />

            <SubmitButton onPress={handleSubmit}>
              <ButtonText>Зарегистрироваться</ButtonText>
            </SubmitButton>
          </FormikView>
        )}
      </Formik>
    </MainContainer>
  );
};

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.white};
  flex-direction: column;
  align-items: center;
`;
export const CustomInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  padding-left: 8px;
  border: 1px solid ${colors.black};
  margin-top: 20px;
`;
export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  background-color: ${colors.darkblue};
  margin-top: 30px;
`;
export const FormikView = styled.View`
  width: 70%;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;
