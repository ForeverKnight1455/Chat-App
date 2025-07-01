import { useAuthStore } from "../store/useAuthStore.js"
import { Settings,LogOut,UserPen } from 'lucide-react';

function Navbar(){
    const {authUser,logout} = useAuthStore();

    return(
        <>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
                <a className="btn btn-ghost text-xl">Chat.ly</a>
                <div>
                    <a className="btn btn-ghost text-xl"><Settings /></a>
                    {authUser ? <a className="btn btn-ghost text-xl"><UserPen /></a> : null }
                    {authUser ? <a className="btn btn-ghost text-xl" onClick={logout}><LogOut /></a> : null}
                </div>
            </div>
        </>
    );
}

export default Navbar;