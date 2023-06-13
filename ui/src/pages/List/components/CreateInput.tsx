import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, FormLabel, Input, VisuallyHidden, useToast } from '@chakra-ui/react';
import { FormEvent, ReactElement, useState } from 'react';

import { useCreateTodoMutation } from '@/api';

const CreateInput = (): ReactElement => {
  const [content, setContent] = useState('');

  const { trigger, isMutating } = useCreateTodoMutation();
  const toast = useToast();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await trigger({ content });
    setContent('');
    toast({
      title: 'New todo added',
      description: "We've created that todo for you. Better get to work!",
      status: 'success',
    });
  };

  return (
    <form style={{ width: '100%' }} onSubmit={onSubmit}>
      <Flex justify="space-between" gap={4}>
        <FormControl w="100%">
          <VisuallyHidden>
            <FormLabel htmlFor="content">Content</FormLabel>
          </VisuallyHidden>
          <Input
            type="text"
            id="content"
            name="content"
            variant="filled"
            bg="gray.200"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          leftIcon={<PlusSquareIcon />}
          bg="gray.200"
          colorScheme="teal"
          variant="ghost"
          isLoading={isMutating}
          loadingText="Creating"
        >
          Create
        </Button>
      </Flex>
    </form>
  );
};

export default CreateInput;
