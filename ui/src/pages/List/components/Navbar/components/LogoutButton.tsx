import { MenuItem } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { useLogoutMutation } from '@/api';

const LogoutButton = (): ReactElement => {
  const { trigger } = useLogoutMutation();

  return <MenuItem onClick={() => trigger()}>Log out</MenuItem>;
};

export default LogoutButton;
