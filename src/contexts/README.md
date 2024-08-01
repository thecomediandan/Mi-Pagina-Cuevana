Es una forma de manejar el estado dentre de una vista simple.

import { User } from '@/models';
import { createContext } from 'react';

export const SelectedUserContext = createContext({
    selectedUser: {} as User,
    setSelectedUser: (user: User) => {}
});
