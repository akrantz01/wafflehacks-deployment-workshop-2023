import { ReactElement } from 'react';

import Login from '@/pages/Login.tsx';

import { useCurrentUser } from './api';

function App(): ReactElement {
  const { data, error, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  if (error !== undefined && error.code === 401) return <Login />;
  else if (data !== undefined) return <p>List</p>;
  else throw error;
}

export default App;
