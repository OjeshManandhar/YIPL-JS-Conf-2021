import { useState, useEffect, useCallback } from 'react';

// packages
import { gql, useMutation } from '@apollo/client';

// utils
import token from 'utils/token';

// styles
import * as S from './styles';
import * as G from 'global/styles';

const CREATE_USER = gql`
  mutation Mutation($createUserData: CreateUserInput!) {
    createUser(data: $createUserData) {
      token
      user {
        name
      }
    }
  }
`;

function CreateAccount(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('MALE');

  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  // const clearForm = useCallback(() => {
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  //   setFirstName('');
  //   setMiddleName('');
  //   setLastName('');
  //   setGender('');
  // }, []);

  const submitForm = useCallback(
    e => {
      e.preventDefault();

      const createUserData = {
        email,
        password,
        confirmPassword,
        firstName,
        middleName,
        lastName,
        gender
      };

      createUser({ variables: { createUserData } });
    },
    [
      email,
      password,
      confirmPassword,
      firstName,
      middleName,
      lastName,
      gender,
      createUser
    ]
  );

  useEffect(() => {
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      token.save(data.createUser.token);

      // navigate to tasks
    }
  }, [data]);

  return (
    <G.FullScreenCenter>
      <S.Content>
        <G.Heading>Create Account</G.Heading>

        <G.Form onSubmit={submitForm}>
          <G.FormControl>
            <G.FormLabel htmlFor='email'>Email</G.FormLabel>
            <G.FormInput
              id='email'
              name='email'
              type='email'
              required
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </G.FormControl>

          <G.FormControl>
            <G.FormLabel htmlFor='password'>Password</G.FormLabel>
            <G.FormInput
              id='password'
              name='password'
              type='password'
              required
              minLength={8}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </G.FormControl>

          <G.FormControl>
            <G.FormLabel htmlFor='confirmPassword'>
              Confirm Password
            </G.FormLabel>
            <G.FormInput
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              required
              minLength={8}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </G.FormControl>

          <G.FormControl>
            <G.FormLabel htmlFor='firstName'>First Name</G.FormLabel>
            <G.FormInput
              id='firstName'
              name='firstName'
              type='text'
              required
              minLength={2}
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </G.FormControl>

          <G.FormControl>
            <G.FormLabel htmlFor='middleName'>Middle Name</G.FormLabel>
            <G.FormInput
              id='middleName'
              name='middleName'
              type='text'
              minLength={2}
              value={middleName}
              onChange={e => setMiddleName(e.target.value)}
            />
          </G.FormControl>

          <G.FormControl>
            <G.FormLabel htmlFor='lastName'>Last Name</G.FormLabel>
            <G.FormInput
              id='lastName'
              name='lastName'
              type='text'
              required
              minLength={2}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </G.FormControl>

          <G.FormControl>
            <G.FormLabel htmlFor='gender'>Gender</G.FormLabel>
            <G.FormInput
              id='gender'
              name='gender'
              type='text'
              required
              value={gender}
              onChange={e => setGender(e.target.value)}
            />
          </G.FormControl>

          <G.FormSubmit type='submit' disabled={loading}>
            Create Account
          </G.FormSubmit>
        </G.Form>

        <G.Text>
          Already have an account?{' '}
          <G.ClickablText onClick={props.switch}>Log In</G.ClickablText>
        </G.Text>
      </S.Content>
    </G.FullScreenCenter>
  );
}

export default CreateAccount;
