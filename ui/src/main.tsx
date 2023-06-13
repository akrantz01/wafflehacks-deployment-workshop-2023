import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{
        defaultOptions: {
          position: 'top-right',
          duration: 2500,
          variant: 'left-accent',
          isClosable: true,
        },
      }}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
