import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import App from './App'

Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [userId, setUserId] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUserId(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && userId ? (
      <div className="App">
          <App />
          <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator initialAuthState="signup">
        <AmplifySignUp
        headerText="How can we reach you if you win?"
        submitButtonText="Complete Registration"
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          // { type: "username" },
          { type: "email" },
          { type: "password" },
          { type: "phone_number" }
        ]}
        />
      </AmplifyAuthenticator>
  );
}

export default AuthStateApp; 