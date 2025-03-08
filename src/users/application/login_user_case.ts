import type { UserRepository } from "../domain/user.repository";

export class LoginUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(email: string, password_hash: string): Promise<void> {
        try {
            await this.userRepository.login(email, password_hash);


            alert('Inicio de sesión exitoso!');
            window.location.href = '/allUsers';  
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
        }
    }
}
