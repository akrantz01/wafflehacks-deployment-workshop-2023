import { ReactElement } from 'react';

import Authentication from '@/pages/Authentication';
import List from '@/pages/List';

import { useCurrentUser } from './api';

function App(): ReactElement {
  const { data, error, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  if (error !== undefined && error.code === 401) return <Authentication />;
  else if (data !== undefined) return <List />;
  else throw error;
}

export default App;
