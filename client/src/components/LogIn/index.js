import { useState, useCallback } from 'react';

// styles
import * as S from './styles';
import * as G from 'global/styles';

function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearForm = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const submitForm = useCallback(
    e => {
      e.preventDefault();

      console.log('data:', { email, password });

      clearForm();
    },
    [email, password, clearForm]
  );

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

          <G.Button type='submit'>Log In</G.Button>
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
