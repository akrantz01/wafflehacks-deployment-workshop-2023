import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useCurrentUser } from '@/api';

import LogoutButton from './LogoutButton.tsx';

const UserMenu = (): ReactElement => {
  const { data } = useCurrentUser();

  return (
    <Menu isLazy>
      <MenuButton as={IconButton} aria-label="User options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <MenuItem isDisabled _hover={{ cursor: 'default' }} _disabled={{ opacity: 1 }}>
          Logged in as&nbsp;<b>{data?.username}</b>
        </MenuItem>
        <LogoutButton />
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
