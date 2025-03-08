import type { UserRepository } from "../domain/user.repository";
import User from "../domain/user.entity";

export class GetAllUsersUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(): Promise<User[]> {
        const users = await this.userRepository.getAll();
        return users;
    }
}
