import React,{ useState } from "react"
import Input from "../../general-ui/components/Input"
import './../../general-ui/css/Main.css'
import ShinyText from "../../TextAnimations/ShinyText/ShinyText"
import FlowingMenu from "../../Components/FlowingMenu/FlowingMenu"
import CircularText from "../../TextAnimations/CircularText/CircularText"
import ButtonCreate from "../../general-ui/components/ButtonCreate"
import Header from "../../general-ui/components/organisms/Header"
import { useUserActions } from "./stores/user.store"
const demoItems = [
    { link: '#', text: 'Aventurero', image: 'https://picsum.photos/600/400?random=9', description: 'Siempre estás en busca de nuevas experiencias y desafíos.' },
    { link: '#', text: 'Creativo', image: 'https://picsum.photos/600/400?random=10', description: 'Tienes una imaginación ilimitada y disfrutas creando cosas nuevas.' },
    { link: '#', text: 'Analítico', image: 'https://picsum.photos/600/400?random=11', description: 'Te encanta resolver problemas y analizar situaciones con detalle.' },
    { link: '#', text: 'Sociable', image: 'https://picsum.photos/600/400?random=12', description: 'Disfrutas de la compañía de otros y siempre estás rodeado de amigos.' }
  ];  

function RegisterFormUser() {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [passwordHash, setPasswordHash] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [matchPreference, setMatchPreference] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [interests, setInterests] = useState<string>("");
    const [statusMessage, setStatusMessage] = useState<string>("");
    const [profilePicture, setProfilePicture] = useState<string>("");
  
    //declarcion de store
    const {registerUser} = useUserActions();

    const payload= {
      full_name: fullName,
      email: email,
      password_hash: passwordHash,
      gender: gender,
      match_preference: matchPreference,
      city: city,
      state: state,
      interests: interests,
      status_message: statusMessage,
      profile_picture: profilePicture,
    };

    const handleClickRegister  =  () => {
      console.log(payload);
      registerUser(payload)
    }
    return(
        <>
       <main className="hero ">
      <Header></Header>
     <section className=" w-full h-[90vh] flex  flex-row">
     <div className="w-[50%] flex items-center h-full p-2.5">
   <article className="flex-col gap-2.5 w-[80%] flex p-9" >
   <CircularText
  text="MATCH*TRAITS*PROFILES*"
  onHover="speedUp"
  spinDuration={30}
  className="text-green-600 text-5xl font-bold"
/>
   <ShinyText text="Register for match with persons of your likes" disabled={false} speed={3} className=' text-4xl font-bold text-green-600' />
        <div className="h-[70%] grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            onChange={(event) => setFullName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"

            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(event) => setPasswordHash(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Gender"
            onChange={(event) => setGender(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Match Preference"
            onChange={(event) => setMatchPreference(event.target.value)}
          />
          <Input
            type="text"
            placeholder="City"
            onChange={(event) => setCity(event.target.value)}
          />
          <Input
            type="text"
            placeholder="State"
            onChange={(event) => setState(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Interests"
            onChange={(event) => setInterests(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Status Message"
            onChange={(event) => setStatusMessage(event.target.value)}
          />
          <ButtonCreate
            text="Register"
            onClick={handleClickRegister}
          >
          </ButtonCreate>
          
        </div>
   </article>
     </div>
     <article className="w-[50%] h-[100%]">
   <div className="h-full">
   <FlowingMenu items={demoItems} />
   </div>
     </article>
     </section>
       </main>
        
        </>
    )
}
export default RegisterFormUser