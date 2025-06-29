import './App.css';

import { useEffect } from 'react';
import { Routes,Route,Navigate } from "react-router-dom";
import { Loader } from "lucide-react";

import Navbar from './components/Navbar.jsx';

import HomePage from './pages/Homepage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

import Toaster from 'react-hot-toast';

import { useAuthStore } from './store/useAuthStore.js';
function App(){
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore()

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);
  console.log({authUser});

  if (isCheckingAuth && !authUser) {
    return(
      <div className='flex justify-center items-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )
  }
  return(
    <>
      <Toaster/>
      <Navbar/> 
      <Routes>
        <Route path='/' element = {authUser ? <HomePage/> : <Navigate to='/login' />} />
        <Route path='/signup' element = {!authUser ? <SignupPage/> : <Navigate to='/' />} />
        <Route path='/login' element = {!authUser ? <LoginPage/> : <Navigate to='/' />} />
        <Route path='/settings' element = {authUser ? <SettingsPage/> : <Navigate to='/login' />} />
        <Route path='/profile' element = {authUser ? <ProfilePage/> : <Navigate to='/login' />} />
      </Routes>
    </>
  );
}

export default App;