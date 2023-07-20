import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function ShowUser() {
  const { user } = useAuth();
  return (
    <div>
      <Image src={user.photoURL} alt="user" width="75px" height="75px" />
      <h2>{user.displayName}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Last Logged In: {user.metadata.lastSignInTime}</h2>
      <Button type="button" size="lg" className="signout-btn" onClick={signOut}>Sign Out</Button>
    </div>
  );
}

ShowUser.propTypes = {
  userObj: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    lastLogIn: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
