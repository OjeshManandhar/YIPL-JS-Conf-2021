import { useState, useEffect, useCallback } from 'react';

// next
import { useRouter } from 'next/router';

// packages
import { gql, useLazyQuery } from '@apollo/client';

// reactive var
import User from 'reactiveVar/User';

// utils
import token from 'utils/token';

// styles
import * as S from './styles';
import * as G from 'global/styles';

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

function LogIn(props) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error, data }] = useLazyQuery(LOGIN);

  // const clearForm = useCallback(() => {
  //   setEmail('');
  //   setPassword('');
  // }, []);

  const submitForm = useCallback(
    e => {
      e.preventDefault();

      login({
        variables: { email, password }
      });
    },
    [email, password, login]
  );

  useEffect(() => {
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      token.save(data.login.token);

      const user = {
        id: data.login.user.id,
        name: data.login.user.name
      };

      User(user);

      router.push('/tasks');
    }
  }, [data, router]);

  return (
    <G.FullScreenCenter>
      <S.Content>
        <G.Heading>Log In</G.Heading>

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

          <G.FormSubmit type='submit' disabled={loading}>
            Log In
          </G.FormSubmit>
        </G.Form>

        <G.Text>
          Don&apos;t have an account?{' '}
          <G.ClickablText onClick={props.switch}>Create Account</G.ClickablText>
        </G.Text>
      </S.Content>
    </G.FullScreenCenter>
  );
}

export default LogIn;
