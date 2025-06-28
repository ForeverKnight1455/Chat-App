import {create} from 'zustand';
import {axiosInstance} from '../lib/axiosInstance.js'
export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn:false,
    isUpdatingProfile:false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            set({isCheckingAuth:true});
            const res = await axiosInstance("/auth/check");
            set({authUser:res.data});
        }
        catch(error){
            console.error("error in checkauth: ",error);
            set({authUser:null});
        }
        finally{
            set({isCheckingAuth:false});
        }
    },

    signup : async (data) => {
        
    }
}))