import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button, Flex, Input } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { useCreateTodoMutation } from '@/api';

const CreateInput = (): ReactElement => {
  const [content, setContent] = useState('');

  const { trigger, isMutating } = useCreateTodoMutation();

  const onSubmit = async () => {
    await trigger({ content });
    setContent('');
  };

  return (
    <Flex justify="space-between" gap={4}>
      <Input
        type="text"
        variant="filled"
        bg="gray.200"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <Button
        leftIcon={<PlusSquareIcon />}
        bg="gray.200"
        colorScheme="teal"
        variant="ghost"
        isLoading={isMutating}
        loadingText="Creating"
        onClick={onSubmit}
      >
        Create
      </Button>
    </Flex>
  );
};

export default CreateInput;
