Vamos a tener todos los servicios llamadas de API

```ts
import { User } from '@/models';
import axios from 'axios';

const apiUrl = 'http://danielquispekuno.com/';
const loginUrl = apiUrl + 'login';

/**
 * @desc log in.
 * @param email - the users email.
 * @param password - the users password.
 * @return Observable<User>
 */

 export const login = (email: string, password: string): User => {
    return axios.post(loginUrl, {email, password});
 }
 ```