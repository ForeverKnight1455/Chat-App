import { useState } from 'react';
import { User,Mail,Lock,MessageSquare,Eye,EyeOff,Loader } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';
function SignupPage (){
  const [showPassword, setshowPaassword] = useState(false);
  const [formData, setformData] = useState({
    fullname:"",
    email:"",
    password:""
  });
  const {isSigningUp,signup} = useAuthStore();

  const validateForm = () => {
    if (!formData.fullname.trim()) return toast.error("Fullname is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must have at least 6 characters");
  
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      signup(formData);
    }
  } 
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='p-2 transition-colors rounded-xl bg-primary/25'>
          <MessageSquare className='size-10'/>
        </div>
        <div>
          <p className='font-bold text-xl'>Create Account</p>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">name</label>
          <div className="input">
            <User/>
            <input 
              type="email"  
              placeholder="Name" 
              onChange={(e) => setformData({...formData, fullname: e.target.value})}
              />
          </div>
          <label className="label">Email</label>
          <div className='input'>
            <Mail/>
            <input 
              type="email"
              placeholder="Email"
              onChange={(e) => setformData({...formData, email: e.target.value})}
              />
          </div>

          <label className="label">Password</label>
          <div className="input">
            <Lock/>
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setformData({...formData, password: e.target.value})}
            />
            <button onClick={(e)=>(setshowPaassword(!showPassword))}>{showPassword ? <Eye className='size-6'/>:<EyeOff className="size-6"/> }</button>
          </div>
          <button className="btn btn-neutral mt-4" disabled={isSigningUp}>
            {isSigningUp ? <Loader className='size-5 animate-spin'/> : "Sign Up"}
          </button>
        </fieldset>
        <div className='text-center'>
          <p className='text-base-content/60'>
            Already have an account <Link to="/login" className='link link-primary'>Login</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
