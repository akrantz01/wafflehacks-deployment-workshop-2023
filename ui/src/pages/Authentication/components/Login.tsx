import { ReactElement } from 'react';

import { useLoginMutation } from '@/api';

import Form from './Form.tsx';

const Login = (): ReactElement => {
  const { isMutating, trigger } = useLoginMutation();

  return (
    <Form
      submit="Login"
      isLoading={isMutating}
      loadingText="Logging in"
      trigger={trigger}
      success={{
        title: 'Successfully logged in',
        description: "You're now logged in! Time to get to work.",
      }}
      error={{
        title: 'Invalid username or password',
        description: 'Please check your username and password are correct.',
      }}
    />
  );
};

export default Login;
