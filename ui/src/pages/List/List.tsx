import { Container, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import CreateInput from './components/CreateInput.tsx';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

const List = (): ReactElement => (
  <VStack bg="gray.100" h="100vh">
    <Container maxW="container.lg" mt={4}>
      <Navbar />
    </Container>
    <Container maxW="container.lg" mt={32}>
      <CreateInput />
    </Container>
    <Container maxW="container.lg" mt={8}>
      <TodoList />
    </Container>
  </VStack>
);

export default List;
