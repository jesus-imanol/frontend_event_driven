import { Link } from "react-router-dom";

function Header() {
  

  return (
    <>
      <header className="h-[10vh] flex w-full border-b-rose-50 border-b items-center">
        <div className="w-[40%] flex items-center justify-start">
        </div>
        <nav className="w-[60%] flex items-center justify-center">
        <ul className="w-full max-w-xl flex justify-around text-xl font-bold gap-2.5 p-2">
            <li>
              <Link to="/" className="cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/register" className="cursor-pointer">Registrate</Link>
            </li>
            <li>
              <Link to="/allUsers" className="cursor-pointer">Matches</Link>
            </li>
            <li>
              <Link to="/me" className="cursor-pointer">Perfil</Link>
            </li>
            <li>
              <Link to="/login" className="cursor-pointer">Iniciar sesion</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
