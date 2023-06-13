import { Flex, Spinner } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface Props {
  fullscreen?: boolean;
}

const Loading = ({ fullscreen }: Props): ReactElement => (
  <Flex bg="gray.100" align="center" justify="center" h={fullscreen ? '100vh' : undefined}>
    <Spinner />
  </Flex>
);

export default Loading;
