import useSWR, { Key } from 'swr';
import useSWRMutation from 'swr/mutation';

import { APIHook, APIMutationHook, FetcherArgs, fetcher } from './fetcher.ts';
import { Error, Todo } from './types.ts';

export const useTodos: APIHook<Todo[], void> = () => useSWR<Todo[], Error>('todos', () => fetcher('/todos'));

type CreateArgs = Pick<Todo, 'content'>;

export const useCreateTodoMutation: APIMutationHook<Todo, void, CreateArgs> = () =>
  useSWRMutation<Todo, Error, Key, CreateArgs>('todos', (_: Key, { arg: body }: FetcherArgs<CreateArgs>) =>
    fetcher<Todo, CreateArgs>('/todos', 'POST', body),
  );

type ToggleResponse = Pick<Todo, 'complete'>;

export const useToggleTodoMutation: APIMutationHook<ToggleResponse, number, void> = (id: number) =>
  useSWRMutation<ToggleResponse, Error, Key, void>('todos', () =>
    fetcher<ToggleResponse>(`/todos/${id}/toggle`, 'PUT'),
  );

export const useDeleteTodoMutation: APIMutationHook<void, number, void> = (id: number) =>
  useSWRMutation<void, Error, Key, void>('todos', () => fetcher<void>(`/todos/${id}`, 'DELETE'));
