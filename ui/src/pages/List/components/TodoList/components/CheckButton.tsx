import { CheckIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useToggleTodoMutation } from '@/api';

interface Props {
  complete: boolean;
  id: number;
}

const CheckButton = ({ id, complete }: Props): ReactElement => {
  const { trigger, isMutating } = useToggleTodoMutation(id);

  return (
    <IconButton
      icon={complete ? <CheckIcon /> : undefined}
      aria-label={complete ? 'Mark incomplete' : 'Mark complete'}
      bg={complete ? 'green.100' : 'gray.200'}
      _hover={{ backgroundColor: complete ? 'green.200' : 'gray.300' }}
      isLoading={isMutating}
      onClick={() => trigger()}
    />
  );
};

export default CheckButton;
