import React from 'react';
import { Button, TextInput, View, Alert, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { withFormik } from 'formik';
import Yup from 'yup';
import { compose } from 'redux';
import { connect } from 'react-redux';

const enhancer = withFormik({
  mapPropsToValues: ({ user }) => ({ email: '', user }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      Alert.alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'BasicForm'
});

const MyReactNativeForm = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  setFieldValue,
  handleBlur,
  handleSubmit,
  handleReset,
  user
}) => (
  <View>
    <Input
      onChangeText={text => setFieldValue('email', text)}
      value={values.email}
    />
    {errors.email &&
      touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
    <Button onPress={handleSubmit} title="Submit" />
    <Text>{user}</Text>
  </View>
);

export default compose(connect(state => ({ user: 'I am user' })), enhancer)(
  MyReactNativeForm
);
