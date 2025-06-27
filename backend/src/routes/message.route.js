import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { getUsersForSidebar,getMessages,sendMessage } from '../controllers/messsage.controller';
const router = express.Router();

router.get('/user',protectRoute, getUsersForSidebar);
router.get('/:id',protectRoute,getMessages);

router.post('/send/:id',protectRoute,sendMessage);

export default router;