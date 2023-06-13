import { Box, Button, Flex, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import { FormEvent, ReactElement, useState } from 'react';

import { useLoginMutation } from '@/api';

const Login = (): ReactElement => {
  const { isMutating, trigger } = useLoginMutation();
  const toast = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await trigger({ username, password });
      toast({
        title: 'Successfully logged in',
        description: "You're now logged in! Time to get to work.",
        status: 'info',
      });
    } catch (e) {
      toast({
        title: 'Invalid username or password',
        description: 'Please check your username and password are correct.',
        status: 'error',
      });
    }
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w="md">
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
            <Button type="submit" colorScheme="purple" width="full" isLoading={isMutating} loadingText="Logging in...">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
