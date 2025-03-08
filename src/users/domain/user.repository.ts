import User from "./user.entity";

export interface UserRepository {
    register(user: User): Promise<void>;
    getAll():Promise<User[]>
    login(email: string, password: string): Promise<void>;
}