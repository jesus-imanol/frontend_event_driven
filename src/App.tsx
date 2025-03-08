
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './general-ui/Main';
import RegisterFormUser from './users/ui/RegisterForm';
import AllUser from './users/ui/AllUsers';
import ProfilePhotoUpload from './users/ui/UploadPicturePerfil';
import LoginUser from './users/ui/LoginUser';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterFormUser />} />
        <Route path='/allUsers' element= {<AllUser/>}></Route>
        <Route path='/uploadPicture' element= {<ProfilePhotoUpload/>}></Route>
        <Route path='/login' element= {<LoginUser/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
