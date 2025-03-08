import './../../general-ui/css/Main.css';
import Header from '../../general-ui/components/organisms/Header';
import { useEffect, useState } from "react";
import User from "../domain/user.entity";
import { useUserActions } from "./stores/user.store";
import CardAvatar from './components/Card';
import TextPressure from '../../TextAnimations/TextPressure/TextPressure';
function AllUser() {
    const { getAllUsers } = useUserActions();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const usersData = await getAllUsers();
                console.log('Datos de usuarios:', usersData); // Agregar log para verificar los datos
                setUsers(usersData);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        }
        fetchUsers();
    }, [getAllUsers]);

    return (
        <>
            <main className="hero">
                <Header />
                <section className='w-full h-[800px] gap-4 flex flex-col'>
                <div className=' w-[650px] bg-[#1abf01be] m-7 flex gap-3'>
<h2 className=' text-5xl mb-9 '>Encuentra a tu Spontainety</h2>
</div>
                <div className="flex items-center justify-center gap-7 mt-12">
                        {users.map(user => (
                            <CardAvatar
                                key={user.id}
                                profile_picture={user.profile_picture}
                                full_name={user.full_name}
                                interests={user.interests}
                                city={user.city}
                                gender={user.gender}
                                match_preference={user.match_preference}
                                status_message={user.status_message}
                                state={user.state}
                                email={user.email}
                            />
                        ))}
                    </div>
                    
                 
                </section>
            </main>
        </>
    );
}

export default AllUser;
