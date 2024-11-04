Donde se almacena el store de Redux

Ejemplo: 

```ts
import { User } from '@/models';
import { configureStore } from '@redixjs/toolkit';
import { userSlice } from './states/user'

export interface AppStore {
    user: User;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
});
```