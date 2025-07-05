import {create} from 'zustand';
import {axiosInstance} from '../lib/axiosInstance.js';
import toast from 'react-hot-toast';

export const useChatStore = create((set) => ({
    messages:[],
    users:[],
    selectedUser:null,
    isLoadingUsers:false,
    isLoadingMessages:false,

    getUsers: async () => {
        set({isLoadingUsers:true});
        try{
            const res = await axiosInstance.get("/message/user");
            set({users:res.data});
        }
        catch(error){
            toast.error(error.response.data.message);
        }
        finally{
            set({isLoadingUsers:false});
        }
    },

    getMessages: async (userId) => {
        set({isLoadingMessages:true});
        try{
            const res = await axiosInstance.get(`/message/${userId}`);
        }
        catch(error){
            toast.error(error.response.data.message);
        }
        finally{
            set({isLoadingMessages:false});
        }
    },

    setSelectedUser: (selectedUser) => {
        set({selectedUser});
    },
}))