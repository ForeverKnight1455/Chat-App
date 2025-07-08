import { useState } from 'react';
import { Mail,Lock,MessageSquare,Eye,EyeOff,Loader } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';
import { toast } from 'react-hot-toast';
function LoginPage (){
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState({
    email:"",
    password:""
  });
  const {isLoggingIn,login} = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must have at least 6 characters");
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data:",formData);
    const success = validateForm();
    if (success === true) {
      login(formData);
    }
    else{
      console.log("formData : ",formData);
    }
    console.log("clicked")
  } 
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen'>

        <div className='p-2 transition-colors rounded-xl bg-primary/25'>
          <MessageSquare className='size-10'/>
        </div>

        <div>
          <p className='font-bold text-xl'>Login Account</p>
        </div>
        <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

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
              <button type="button" onClick={() => setshowPassword(!showPassword)}>{showPassword ? <Eye className='size-6'/>:<EyeOff className="size-6"/> }</button>
            </div>

          <button className="btn btn-neutral mt-4" disabled={isLoggingIn} type="submit">
            {isLoggingIn ? <Loader className='size-5 animate-spin'/> : "Login"}
          </button>
        </fieldset>
        </form>
        <div className='text-center'>
          <p className='text-base-content/60'>
            Don't have an account <Link to="/signup" className='link link-primary'>Signup</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}

export default LoginPage;