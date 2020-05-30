import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';

const styles = {
  bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    paddingLeft: 16,
  },
};

export default () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (authUser) => {
        // console.log('###DEBUG###', authUser);
        setUser(authUser);
      },
      (e) => {
        console.error(e);
      },
    );

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.error('Logout failed');
    }
  };

  const goToLoginPage = () => {
    history.push('/login');
  };

  return (
    <AppBar position='static' style={styles.bar}>
      <Typography variant='h6'>Retro Board</Typography>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={goToLoginPage}>Login</Button>
      )}
    </AppBar>
  );
};
