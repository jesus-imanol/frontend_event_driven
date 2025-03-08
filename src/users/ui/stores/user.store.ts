    import User from "./../../domain/user.entity";
    import { RegisterUserUseCase } from "../../application/register_user_use_case";
    import { AxiosUserRepository } from "../../infraestructure/api-user.repository";
    import { useCallback } from "react";
import { GetAllUsersUseCase } from "../../application/getall_user_case";
import { LoginUseCase } from "../../application/login_user_case";
    export const useUserActions = () => {
        const registerUser = useCallback(async (userData: Omit<User, 'id'>) => {
        const repository = new AxiosUserRepository();
        const useCase = new RegisterUserUseCase(repository);
        await useCase.execute(userData);
        }, []);

        const getAllUsers = useCallback(async () => {
        const repository = new AxiosUserRepository();
        const useCase = new GetAllUsersUseCase(repository);
        const users = await useCase.execute();
        return users;
    }, []);
    const loginUser = useCallback(async (email: string, password: string) => {
        const repository = new AxiosUserRepository();
        const useCase = new LoginUseCase(repository);
        await useCase.execute(email, password);
    }, []);
    
    
        return { registerUser, getAllUsers, loginUser };
    };