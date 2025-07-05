import { useAuthStore } from "../store/useAuthStore.js"
import { Settings,LogOut,UserPen } from 'lucide-react';
import { Link } from "react-router-dom";
function Navbar(){
    const {authUser,logout} = useAuthStore();

    return(
        <>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
                <div>
                    <Link to="/">
                        <a className="btn btn-ghost text-xl">Chat.ly</a>
                    </Link>
                </div>
                <div>
                    <Link to="/settings">
                        <a className="btn btn-ghost text-xl"><Settings /></a>
                    </Link>
                    {authUser ? 
                        <Link to='/profile'>
                            <a className="btn btn-ghost text-xl"><UserPen /></a>
                        </Link> 
                    : null }
                    {authUser ? <a className="btn btn-ghost text-xl" onClick={logout}><LogOut /></a> : null}
                </div>
            </div>
        </>
    );
}

export default Navbar;