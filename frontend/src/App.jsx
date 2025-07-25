import './App.css';

import { useEffect } from 'react';
import { Routes,Route,Navigate } from "react-router-dom";
import { Loader } from "lucide-react";

import Navbar from './components/Navbar.jsx';

import HomePage from './pages/Homepage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import SignupPage from './pages/SignUpPage.jsx';

import {Toaster} from 'react-hot-toast';

import { useThemeStore } from './store/useThemeStore.js'
import { useAuthStore } from './store/useAuthStore.js';
function App(){
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore()
  const {theme} = useThemeStore();
  useEffect(()=>{
    checkAuth();
    console.log(onlineUsers);
  },[checkAuth]);

  if (isCheckingAuth && !authUser) {
    return(
      <div data-theme={theme} className='flex justify-center items-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )
  }
  return(
    <div data-theme={theme}>
      <Navbar/> 
      <Routes>
        <Route path='/' element = {authUser ? <HomePage/> : <Navigate to='/login' />} />
        <Route path='/signup' element = {!authUser ? <SignupPage/> : <Navigate to='/' />} />
        <Route path='/login' element = {!authUser ? <LoginPage/> : <Navigate to='/' />} />
        <Route path='/settings' element = {<SettingsPage/>} />
        <Route path='/profile' element = {authUser ? <ProfilePage/> : <Navigate to='/login' />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;