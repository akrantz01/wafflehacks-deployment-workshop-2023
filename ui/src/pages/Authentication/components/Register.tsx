import { ReactElement } from 'react';

import { useRegisterMutation } from '@/api';

import Form from './Form.tsx';

interface Props {
  toLogin: () => void;
}

const Register = ({ toLogin }: Props): ReactElement => {
  const { isMutating, trigger } = useRegisterMutation();

  return (
    <Form
      submit="Register"
      loadingText="Registering"
      isLoading={isMutating}
      trigger={trigger}
      success={{
        title: 'Successfully registered',
        description: "You're now ready to login!",
      }}
      error={{
        title: 'Username already taken',
        description: 'Whoops, it looks like that username is already taken. Please pick another and try again.',
      }}
      onSuccess={toLogin}
    />
  );
};

export default Register;
