import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button, Flex, Input, useToast } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { useCreateTodoMutation } from '@/api';

const CreateInput = (): ReactElement => {
  const [content, setContent] = useState('');

  const { trigger, isMutating } = useCreateTodoMutation();
  const toast = useToast();

  const onSubmit = async () => {
    await trigger({ content });
    setContent('');
    toast({
      title: 'New todo added',
      description: "We've created that todo for you. Better get to work!",
      status: 'success',
    });
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
