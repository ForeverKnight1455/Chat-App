import Message from '../models/message.model.js';
import User from '../models/user.model.js';

export const getUsersForSidebar = async(req,res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({id : {$ne:loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    }
    catch(error){
        console.error("error in getUsersForSidebar controller:", error.message);
        res.status(500).json({error:"internal server error"});
    }
}

export const getMessages = async (req,res) => {
    try{
        const {id:userToChatId} = req.params;
        const myId = req.user._id;
        const Messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId:userToChatId, receiverId:myId}
            ]
        })
    }
}