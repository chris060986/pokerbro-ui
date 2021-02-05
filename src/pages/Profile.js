import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography'

function Profile() {
  return (
    <Container>
      <TypoGraphy variant="h4" component="h1" color="primary" >Profile</TypoGraphy>
      <span>Enter your username:</span>
      <ul>
         <li><a href="https://bit.ly/39ju0lm">Material Design Colors</a></li>
         <li><a href="https://bit.ly/2KQBfb9">Additional Design Colors</a></li>
      </ul>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </Container>    
  );
}

export default Profile;
