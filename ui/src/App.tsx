import { ReactElement } from 'react';

import List from '@/pages/List';
import Login from '@/pages/Login.tsx';

import { useCurrentUser } from './api';

function App(): ReactElement {
  const { data, error, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  if (error !== undefined && error.code === 401) return <Login />;
  else if (data !== undefined) return <List />;
  else throw error;
}

export default App;
