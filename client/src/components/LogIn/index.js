import { useState, useCallback } from 'react';

// styles
import * as S from './styles';

function LogIn() {
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
    <S.Container>
      <form onSubmit={submitForm}>
        <input
          id='email'
          name='email'
          type='email'
          required
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          id='password'
          name='password'
          type='password'
          required
          minLength={8}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>Log in</button>
      </form>
    </S.Container>
  );
}

export default LogIn;
