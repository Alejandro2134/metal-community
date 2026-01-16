import { User } from '../entities/User';

export interface IUserRepository {
    createUser(): Promise<User>;
}
