import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { getUsersForSidebar,getMessages } from '../controllers/messsage.controller';
const router = express.Router();

router.get('/user',protectRoute, getUsersForSidebar);
router.get('/:id',protectRoute,getMessages);
export default router;