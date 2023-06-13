import { DeleteIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactElement, useRef } from 'react';

import { useDeleteTodoMutation } from '@/api';

interface Props {
  id: number;
}

const DeleteButton = ({ id }: Props): ReactElement => {
  const { trigger, isMutating } = useDeleteTodoMutation(id);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const onClick = async () => {
    await trigger();
    onClose();
  };

  return (
    <>
      <IconButton icon={<DeleteIcon />} aria-label="Delete" bg="red.100" isLoading={isMutating} onClick={onOpen} />

      <AlertDialog leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete todo?
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Nevermind
            </Button>
            <Button colorScheme="red" ml={3} onClick={onClick} isLoading={isMutating} loadingText="Deleting">
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteButton;
