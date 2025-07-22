import { useAuthStore } from "../store/useAuthStore.js"
import { Settings,LogOut,UserPen } from 'lucide-react';
import { Link } from "react-router-dom";

function Navbar(){ 
    const {authUser,logout} = useAuthStore();
    
    return(
        <>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
                <div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        Chat.ly
                    </Link>
                </div>
                <div>
                    <Link to="/settings" className="btn btn-ghost text-xl">
                        <Settings />
                    </Link>
                    {authUser ? 
                        <Link to='/profile' className="btn btn-ghost text-xl">
                            <UserPen />
                        </Link> 
                    : null }
                    {authUser ? 
                        <a className="btn btn-ghost text-xl" onClick={logout}><LogOut /></a> 
                    : null}
                </div>
            </div>
        </>
    );
}

export default Navbar;