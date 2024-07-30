import { UserSchema } from '@src/entities/User/model/types/UserSchema';
import { LoginSchema } from '@src/features/AuthByEmail/model/types/loginSchema';

export interface StateSchema {
  loginForm: LoginSchema;
  user: UserSchema;
}
