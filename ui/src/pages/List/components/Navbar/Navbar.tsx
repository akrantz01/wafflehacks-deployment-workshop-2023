import { Card, CardBody, Flex, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';

import UserMenu from './components/UserMenu.tsx';

const Navbar = (): ReactElement => (
  <Card>
    <CardBody>
      <Flex justify="space-between">
        <Heading as="h2" size="lg">
          Wafflodo
        </Heading>
        <UserMenu />
      </Flex>
    </CardBody>
  </Card>
);

export default Navbar;
