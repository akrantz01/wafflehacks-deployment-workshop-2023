import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import Login from './components/Login.tsx';
import Register from './components/Register.tsx';

const Authentication = (): ReactElement => {
  const [showRegistration, setRegistrationVisible] = useState(false);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" pt={8} py={3} px={6} rounded="md" w="md">
        <Heading mb={4} size="2xl">
          Wafflodo
        </Heading>
        {showRegistration ? <Register toLogin={() => setRegistrationVisible(false)} /> : <Login />}
        <Text mt={4} align="center">
          {showRegistration ? 'Already have an account?' : 'Need an account?'}
          <Link ml={1} color="blue.500" onClick={() => setRegistrationVisible((visible) => !visible)}>
            Click here
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Authentication;
