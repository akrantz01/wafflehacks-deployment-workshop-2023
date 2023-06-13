import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import { FormEvent, ReactElement, useState } from 'react';

import { AuthArgs, AuthenticationStatus } from '@/api';

interface Toast {
  title: string;
  description: string;
}

interface Props {
  trigger: (args: AuthArgs) => Promise<AuthenticationStatus | undefined>;
  isLoading: boolean;

  success: Toast;
  error: Toast;

  submit: string;
  loadingText: string;

  onSuccess?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const Form = ({ trigger, isLoading, success, error, submit, loadingText, onSuccess = noop }: Props): ReactElement => {
  const toast = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await trigger({ username, password });
      onSuccess();
      toast({
        title: success.title,
        description: success.description,
        status: 'info',
      });
    } catch (e) {
      toast({
        title: error.title,
        description: error.description,
        status: 'error',
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="text"
            variant="filled"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            variant="filled"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading} loadingText={loadingText}>
          {submit}
        </Button>
      </VStack>
    </form>
  );
};

export default Form;
