import Header from "../../general-ui/components/organisms/Header"
import { useState } from "react";
import Input from "../../general-ui/components/Input";
import Masonry from "../../Components/Masonry/Masonry";
import { useUserActions } from "./stores/user.store";
const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
  ];
function LoginUser() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { loginUser } = useUserActions();

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };
    return(
    <>
      <main className="hero">
        <Header></Header>
        <section className='w-full h-[800px] gap-4 flex flex-row'>
        <article className="w-[50%] h-full p-6 flex flex-col items-center">
          <div className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700/30">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Inicia sesión</h1>
              <p className="text-gray-400 text-center text-sm">Bienvenido de nuevo a nuestra plataforma</p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="pl-10">
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div className="pl-10">
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mt-4">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-400">Recordarme</label>
                </div>
                <a href="#" className="font-medium text-blue-500 hover:text-blue-400">¿Olvidaste tu contraseña?</a>
              </div>
              
              <button onClick={handleLogin}
                className="w-full py-3 px-4 mt-6 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Iniciar sesión
              </button>
              
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">O continúa con</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                  Facebook
                </button>
              </div>
              
              <p className="text-center text-gray-400 text-sm mt-6">
                ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:text-blue-400 font-medium">Regístrate ahora</a>
              </p>
            </div>
          </div>
        </article>
        <article className="w-[50%] h-full p-6">
          <Masonry data={data} />
        </article>
        </section>
      </main>
    </>)
}
export default LoginUser