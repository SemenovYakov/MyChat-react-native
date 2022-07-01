import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {
  ButtonText,
  CustomInput,
  FormikView,
  MainContainer,
  SubmitButton,
} from './registration-screen';
import {login} from '../components/functions/login';
import {colors} from '../../theme/colors';
interface ValuesProps {
  email: string;
  password: string;
}
export const AuthScreen = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object({
    email: yup.string().required('required'), //email
    password: yup.string().required('required'),
  });
  const onSubmit = (values: ValuesProps) => {
    login(values);
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
              placeholder="Email"
              placeholderTextColor={colors.lightgray}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <CustomInput
              placeholder="Пароль"
              placeholderTextColor={colors.lightgray}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />

            <SubmitButton onPress={handleSubmit}>
              <ButtonText>Войти</ButtonText>
            </SubmitButton>
          </FormikView>
        )}
      </Formik>
    </MainContainer>
  );
};
