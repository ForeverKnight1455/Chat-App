import { useEffect } from 'react';
import './App.css'
import useAuthStore from './store/useAuthStore.js'
import {Routes,Route} from 'react-router-dom';
function App(){
  const {authUser,checkAuth} =  useAuthStore();
  useEffect(()=>{
    checkAuth();
  },[checkAuth])

  console.log({authUser});
  return(
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;