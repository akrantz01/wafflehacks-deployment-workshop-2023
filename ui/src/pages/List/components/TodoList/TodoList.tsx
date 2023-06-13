import { VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useTodos } from '@/api';
import Loading from '@/components/Loading.tsx';

import Item from './components/Item.tsx';

const TodoList = (): ReactElement => {
  const { data = [], isLoading } = useTodos();

  if (isLoading) return <Loading />;

  return (
    <VStack spacing={4}>
      {data.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </VStack>
  );
};

export default TodoList;
