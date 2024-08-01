Son aquellos  que reciben la informacion la capturan y la adaptan.

Ejemplo:

import { User } from '@/models';

export const createAdapterUser = (user: any) => {
    const formatedUser: User = {
        name: user.name,
        lastname: user.last_name
    };

    return formatedUser;
}