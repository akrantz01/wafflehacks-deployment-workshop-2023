import { Card, CardBody, HStack, Spacer, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Todo } from '@/api';
import DeleteButton from '@/pages/List/components/TodoList/components/DeleteButton.tsx';

import CheckButton from './CheckButton.tsx';

const Item = ({ id, content, complete }: Todo): ReactElement => {
  return (
    <Card w="full">
      <CardBody>
        <HStack spacing={4}>
          <CheckButton complete={complete} id={id} />
          <Text>{content}</Text>
          <Spacer />
          <DeleteButton id={id} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Item;
