import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <Flex justify="center">
          <a href="https://vitejs.dev" target="_blank">
            <Image
              src={viteLogo}
              alt="Vite logo"
              boxSize="6em"
              transition="filter 300ms"
              _hover={{ filter: 'drop-shadow(0 0 2em #646cffaa)' }}
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <Image
              src={reactLogo}
              alt="React logo"
              boxSize="6em"
              transition="filter 300ms"
              _hover={{ filter: 'drop-shadow(0 0 2em #61dafbaa)' }}
            />
          </a>
        </Flex>
        <Center>
          <Heading as="h1" size="4xl">
            Vite + React
          </Heading>
        </Center>
        <div>
          <Center>
            <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
          </Center>
          <Text align="center">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </div>
        <Text color="gray.500" align="center">
          Click on the Vite and React logos to learn more
        </Text>
      </Box>
    </Flex>
  );
}

export default App;
