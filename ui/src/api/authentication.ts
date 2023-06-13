import useSWR, { Key } from 'swr';
import useSWRMutation from 'swr/mutation';

import { APIHook, APIMutationHook, FetcherArgs, fetcher } from './fetcher.ts';
import { AuthenticationStatus, Error, User } from './types.ts';

export const useCurrentUser: APIHook<User, void> = () =>
  useSWR<User, Error>('current-user', () => fetcher('/me'), { shouldRetryOnError: false });

export interface AuthArgs {
  username: string;
  password: string;
}

export const useLoginMutation: APIMutationHook<AuthenticationStatus, void, AuthArgs> = () =>
  useSWRMutation<AuthenticationStatus, Error, Key, AuthArgs>(
    'current-user',
    (_: Key, { arg: body }: FetcherArgs<AuthArgs>) => fetcher<AuthenticationStatus, AuthArgs>('/login', 'POST', body),
  );

export const useRegisterMutation: APIMutationHook<AuthenticationStatus, void, AuthArgs> = () =>
  useSWRMutation<AuthenticationStatus, Error, Key, AuthArgs>(
    'current-user',
    (_: Key, { arg: body }: FetcherArgs<AuthArgs>) =>
      fetcher<AuthenticationStatus, AuthArgs>('/register', 'POST', body),
  );

export const useLogoutMutation: APIMutationHook<AuthenticationStatus, void, void> = () =>
  useSWRMutation<AuthenticationStatus, Error, Key, void>('current-user', () =>
    fetcher<AuthenticationStatus>('/logout'),
  );
