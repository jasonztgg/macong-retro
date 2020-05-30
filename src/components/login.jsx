import React, { useState } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';

const styles = {
  container: {
    width: '40%',
  },
  left: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 4,
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 4,
  },
  title: {
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
  },
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const login = async () => {
    setPassword('');
    setError('');

    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      history.push('/board');
    } catch (e) {
      console.error('Login failed', e);
      setError(e);
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} style={styles.title}>
          <h2>Retro Board</h2>
        </Grid>

        <Grid item xs={12} sm={6} style={styles.left}>
          Username
        </Grid>
        <Grid item xs={12} sm={6} style={styles.right}>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={styles.left}>
          Password
        </Grid>
        <Grid item xs={12} sm={6} style={styles.right}>
          <input
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={login}>Login</Button>
        </Grid>

        {error && (
          <Grid item xs={12}>
            <p style={styles.errorMessage}>{error.message}</p>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Login;
