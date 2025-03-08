import axios from "axios";
import User from "../domain/user.entity";
import type { UserRepository } from "../domain/user.repository";


export class AxiosUserRepository implements UserRepository {
    async register(user: User): Promise<void> {
 
        try {
            const response = await axios.post('http://3.81.192.82:3000/v1/users/', {
                full_name: user.full_name,
                email: user.email,
                password_hash: user.password_hash,
                gender: user.gender,
                match_preference: user.match_preference,
                city: user.city,
                state: user.state,
                interests: user.interests,
                status_message: user.status_message,
                profile_picture: user.profile_picture,
            });

            console.log('Respuesta del servidor:', response);

            // Obtener el token de la cabecera o del body
            const tokenHeader = response.headers['authorization'] || response.headers['Authorization'];
            let token = '';

            if (tokenHeader && tokenHeader.startsWith('Bearer ')) {
                token = tokenHeader.split(' ')[1];
            } else if (response.data.token) {
                token = response.data.token;
            } else {
                throw new Error('No se recibió un token válido en la respuesta del servidor');
            }

            localStorage.setItem('fullName', user.full_name);
            localStorage.setItem('authToken', token);
            localStorage.setItem('userId', response.data.data.id); // Establecer el id del usuario en el localStorage

            
            alert('Registro exitoso!');
            window.location.href = '/uploadPicture'; 
  

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Error en la petición:', error.response?.data || error.message);
                alert(`Error al registrar usuario: ${error.response?.data || error.message}`);
            } else {
                console.error('Error inesperado:', error);
                alert(`Error inesperado: ${error}`);
            }
            throw new Error('Error al registrar el usuario');
        }
    }

    async getAll(): Promise<User[]> {
        try {
            const response = await axios.get('http://3.81.192.82:3000/v1/users/all');
            const usersData = response.data.data; 

            if (!Array.isArray(usersData)) {
                throw new Error('La respuesta no es un array');
            }

            const users = usersData.map((userData: any) => {
                const { id, attributes } = userData;
                return new User(
                    id,
                    attributes.full_name,
                    attributes.email,
                    attributes.password_hash,
                    attributes.gender,
                    attributes.match_preference,
                    attributes.city,
                    attributes.state,
                    attributes.interests,
                    attributes.status_message,
                    attributes.profile_picture
                );
            });

            return users;

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Error en la petición:', error.response?.data || error.message);
                alert(`Error al obtener usuarios: ${error.response?.data || error.message}`);
            } else {
                console.error('Error inesperado:', error);
                alert(`Error inesperado: ${error}`);
            }
            throw new Error('Error al obtener los usuarios');
        }
    }


    async login(email: string, password_hash: string): Promise<void> {
      try {
          const response = await axios.post('http://3.81.192.82:3000/v1/users/login', {
              email,
              password_hash,
          });
          const userId = response.data.data.id;
          localStorage.setItem('userId', userId);

      } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
              console.error('Error en la petición:', error.response?.data || error.message);
              alert(`Error al iniciar sesión: ${error.response?.data || error.message}`);
          } else {
              console.error('Error inesperado:', error);
              alert(`Error inesperado: ${error}`);
          }
          throw new Error('Error al iniciar sesión');
      }
  }
}
