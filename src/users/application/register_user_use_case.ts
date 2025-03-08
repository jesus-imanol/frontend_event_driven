import type { UserRepository } from "../domain/user.repository";
import User from "../domain/user.entity";
export class RegisterUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}
  
    async execute(userData: Omit<User, 'id'>) {
      const user = User.create(userData);
      await this.userRepository.register(user);
    }
}